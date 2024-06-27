const reporter = require('cucumber-html-reporter');
var date = new Date ();
var currentDate = date.getDate() + '_' + (date.getMonth()+1) + '_' +date.getFullYear() + '_' 
                        + date.getHours() + '_' + date.getMinutes() + '_' + date.getSeconds() + '_' + date.getMilliseconds();

var options = {
    brandTitle: "demo test scenarios",
    theme: 'bootstrap',
    jsonFile: './Reports/cucumber_report.json',
    output: './Reports/cucumber_report_'+ currentDate +'.html',
    screenshotsDirectory: './Reports/Screenshots/',
    storeScreenshots: true,
    reportSuiteAsScenarios: true,
    launchReport: true,
    scenarioTimestamp: true,
    metadata: {
        "App Version":"1.1.1",
        "Test Environment": "QA",
        "Platform": "Web/Angular",
        "Sprint": "001"
    }
};

reporter.generate(options);