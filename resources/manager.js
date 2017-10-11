var sampleSizes = [ 10, 50, 100, 300 ];
var sampleSizeStep;
var runs = [],
    res = document.getElementById('results'),
    timesRan = 0,
    runButton

function formatTestName(suiteName, testName) {
    return suiteName + (testName ? ': ' + testName : '');
}

function createUIForSuites(suites, onstep, onrun) {
    var control = document.createElement('nav');
    var ol = document.createElement('ol');
    var checkboxes = [];

    var button = document.createElement('button');
    button.textContent = 'Step Tests';
    button.onclick = onstep;
    control.appendChild(button);

    var button = runButton = document.createElement('button');
    button.textContent = 'Run All';
    button.onclick = onrun;
    control.appendChild(button);

    for (var suiteIndex = 0; suiteIndex < suites.length; suiteIndex++) {
        var suite = suites[suiteIndex];
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.id = suite.name;
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        checkbox.onchange = (function (suite, checkbox) { return function () { suite.disabled = !checkbox.checked; } })(suite, checkbox);
        checkbox.onchange();
        checkboxes.push(checkbox);

        li.appendChild(checkbox);
        var label = document.createElement('label');
        label.appendChild(document.createTextNode(formatTestName(suite.name) + ' ' + suite.version));
        li.appendChild(label);
        label.htmlFor = checkbox.id;

        var testList = document.createElement('ol');
        for (var testIndex = 0; testIndex < suite.tests.length; testIndex++) {
            var testItem = document.createElement('li');
            var test = suite.tests[testIndex];
            var anchor = document.createElement('a');
            anchor.id = suite.name + '-' + test.name;
            test.anchor = anchor;
            anchor.appendChild(document.createTextNode(formatTestName(suite.name, test.name)));
            testItem.appendChild(anchor);
            testList.appendChild(testItem);
        }
        li.appendChild(testList);

        ol.appendChild(li);
    }

    control.appendChild(ol);

    return control;
}

function startTest() {

    var match = window.location.search.match(/[\?&]r=(\d+)/),
        timesToRun = match ? +(match[1]) : 1

    var runner = new BenchmarkRunner(Suites, {
        willRunTest: function (suite, test) {
            test.anchor.classList.add('running');
        },
        didRunTest: function (suite, test) {
            var classList = test.anchor.classList;
            classList.remove('running');
            classList.add('ran');
        },
        didRunSuites: function (measuredValues) {
            var results = '';
            var total = 0; // FIXME: Compute the total properly.
            for (var suiteName in measuredValues) {
                var suiteResults = measuredValues[suiteName];
                for (var testName in suiteResults.tests) {
                    var testResults = suiteResults.tests[testName];
                    for (var subtestName in testResults) {
                        results += suiteName + ' : ' + testName + ' : ' + subtestName
                            + ': ' + testResults[subtestName] + ' ms\n';
                    }
                }
                results += suiteName + ' : ' + suiteResults.total + ' ms\n';
                total += suiteResults.total;
            }
            results += 'Run ' + (runs.length + 1) +'/' + timesToRun + ' - Total : ' + total + ' ms\n';

            if (!results)
                return;

            // console.log(results);

            runs.push(measuredValues)
            timesRan++
            if (timesRan >= timesToRun) {
                timesRan = 0
                reportAverage()
            } else {
                setTimeout(function () {
                    runButton.click()
                }, 0)
            }
        }
    });

    var currentState = null;
    function callNextStep(state, promise) {
        runner.step(state).then(function (newState) {
            currentState = newState;
            if (newState)
                callNextStep(newState, promise);
            else if(promise)
                promise.resolve(true);
        });
    }

    // Don't call step while step is already executing.
    document.body.appendChild(createUIForSuites(Suites,
        function () { runner.step(currentState).then(function (state) { currentState = state; }); },
        function () {
            document.getElementById("analysis").style.display = 'none';

            sampleSizeStep = 0;
            runTests();
        }));

    function runTests() {
        document.querySelectorAll('.ran').forEach(function(elem) {
          elem.className = '';
        });
        var promise = new SimplePromise;
        numberOfItemsToAdd = sampleSizes[sampleSizeStep];

        callNextStep(currentState, promise);

        promise.then(function() {
            if(++sampleSizeStep < sampleSizes.length) {
                runTests();
            } else {
                document.getElementById("analysis").style.display = 'block';
            }
        });
    }

    function reportAverage () {
        var results = {}
        var runData = runs[runs.length-1];
        for (var key in runData) {
            results[key] = runData[key].total;
        }
        drawChart(results);
    }
}

google.load("visualization", "1", {packages:["corechart"]});
function drawChart(results) {
    var rawData = [ [ "Project" , "Time", { role: "style"} ] ];
    for (var key in results) {
        var color = key === 'FiberJS' ? 'rgb(140, 217, 217)': 'rgb(140, 217, 140)';
        rawData.push([ key, Math.round(results[key]), color ]);
    }
    var data = google.visualization.arrayToDataTable(rawData);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var runWord = "run" + (runs.length > 1 ? "s" : "");
    var title = "Runtimes in milliseconds (lower is better)";

    var options = {
	title: "TodoMVC Benchmark [" + numberOfItemsToAdd + " items in " + browser() + "]",
	width: 600,
	height: 260,
        legend: { position: "none" },
        backgroundColor: 'transparent',
        hAxis: {title: title}
    };
    var barchart = document.getElementById("barchart_values");
    var newChart = document.createElement('div');
    barchart.appendChild(newChart);
    var chart = new google.visualization.BarChart(newChart);
    chart.draw(view, options);
}

window.addEventListener('load', startTest);

function browser() {
    if(navigator.userAgent.indexOf("Chrome") != -1 ) {
        return 'Chrome';
    } else if(navigator.userAgent.indexOf("Safari") != -1) {
        return 'Safari';
    } else if(navigator.userAgent.indexOf("Firefox") != -1 ) {
         return 'Firefox';
    }
}
