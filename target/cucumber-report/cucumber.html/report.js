$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/recources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As a user,I want to login to orangehrm website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.uri("src/test/java/com/orangehrm/recources/featurefile/pim.feature");
formatter.feature({
  "line": 1,
  "name": "Employee Records Display",
  "description": "As a user I am able to see the Employee information on PIM Page",
  "id": "employee-records-display",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12139807000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should be able to view valid Employee Records",
  "description": "",
  "id": "employee-records-display;user-should-be-able-to-view-valid-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Welcome Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select Employee Name \" Fiona Grace\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am able to see the Name in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "PimTestSteps.iAmOnWelcomeAdminPage()"
});
formatter.result({
  "duration": 11868221800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Fiona Grace",
      "offset": 24
    }
  ],
  "location": "PimTestSteps.iSelectEmployeeName(String)"
});
formatter.result({
  "duration": 1191029300,
  "status": "passed"
});
formatter.match({
  "location": "PimTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 576487700,
  "status": "passed"
});
formatter.match({
  "location": "PimTestSteps.iAmAbleToSeeTheNameInTheResults()"
});
formatter.result({
  "duration": 111728300,
  "status": "passed"
});
formatter.after({
  "duration": 718879800,
  "status": "passed"
});
formatter.before({
  "duration": 10860520100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should not be able to view Invalid Employee Records",
  "description": "",
  "id": "employee-records-display;user-should-not-be-able-to-view-invalid-employee-records",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Welcome Admin Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I select Employee Name \" Govind Maharaj Prabhudeva\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I get No Records Message in the results",
  "keyword": "Then "
});
formatter.match({
  "location": "PimTestSteps.iAmOnWelcomeAdminPage()"
});
formatter.result({
  "duration": 11587368300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " Govind Maharaj Prabhudeva",
      "offset": 24
    }
  ],
  "location": "PimTestSteps.iSelectEmployeeName(String)"
});
formatter.result({
  "duration": 1515912800,
  "status": "passed"
});
formatter.match({
  "location": "PimTestSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 561107200,
  "status": "passed"
});
formatter.match({
  "location": "PimTestSteps.iGetNoRecordsMessageInTheResults()"
});
formatter.result({
  "duration": 91671900,
  "status": "passed"
});
formatter.after({
  "duration": 721678900,
  "status": "passed"
});
});