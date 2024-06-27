const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './Reports/cucumber_report.json',
  output: './Reports/cucumber_report.html',
  screenshotsDirectory: './Reports/screenshots/',
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
