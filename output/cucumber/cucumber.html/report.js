$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \u003caccountNumber\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin \u003cPIN\u003e and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User inputs the \u003cReceiverBankName\u003e, \u003cReceiverName\u003e, \u003cReceiverAccountNumber\u003e,\u003cRoutingNumber\u003e, \u003cAmount\u003e and \u003cDescription\u003e to complete the fund transfer",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "user enter authentication code as \u003cAuthorizationCode\u003e and click validate button",
  "keyword": "And "
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "Password",
        "PIN",
        "ReceiverBankName",
        "ReceiverName",
        "ReceiverAccountNumber",
        "RoutingNumber",
        "Amount",
        "Description",
        "AuthorizationCode"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345",
        "DigiBank",
        "EtherTent",
        "1234567890",
        "87654321",
        "15",
        "This is for Testing Purpose",
        "123456"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b60.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user see the successful transaction message and reference number generated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the 1234556666 and MavDemo@01",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b61.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:39"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b62.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin 12345 and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:60"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b63.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b64.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:25"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b65.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User inputs the DigiBank, EtherTent, 1234567890,87654321, 15 and This is for Testing Purpose to complete the fund transfer",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:48"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b66.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:30"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b67.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter authentication code as 123456 and click validate button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:70"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b68.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see success message and reference no will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:77"
});
formatter.embedding("image/png", "images/4e425c4ec5c641669602dc4745e028b69.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate if user can navigate to home page with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \u003caccountNumber\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User navigate to account pin field",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin \u003cPIN\u003e and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "Password",
        "PIN"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/b98a7be89d3748e19699cdbdbf79e1fc0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate if user can navigate to home page with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the 1234556666 and MavDemo@01",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/b98a7be89d3748e19699cdbdbf79e1fc1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:39"
});
formatter.embedding("image/png", "images/b98a7be89d3748e19699cdbdbf79e1fc2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigate to account pin field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:55"
});
formatter.embedding("image/png", "images/b98a7be89d3748e19699cdbdbf79e1fc3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin 12345 and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:60"
});
formatter.embedding("image/png", "images/b98a7be89d3748e19699cdbdbf79e1fc4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/b98a7be89d3748e19699cdbdbf79e1fc5.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate if user see the warning message when any of mandatory field is missing",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \u003caccountNumber\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin \u003cPIN\u003e and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.step({
  "name": "User see the warning message when mandatory field is missing",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "Password",
        "PIN"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299040.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate if user see the warning message when any of mandatory field is missing",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the 1234556666 and MavDemo@01",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299041.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:39"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299042.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin 12345 and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:60"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299043.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299044.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Fund Transfer Tab",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:25"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299045.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the FundTransfer button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:30"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299046.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see the warning message when mandatory field is missing",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:40"
});
formatter.embedding("image/png", "images/d3ecf685296542dead3e4518c66299047.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user can see the account details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \u003caccountNumber\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin \u003cPIN\u003e and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "user click the account details button",
  "keyword": "And "
});
formatter.step({
  "name": "user should display all the account details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "Password",
        "PIN"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31180.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user can see the account details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the 1234556666 and MavDemo@01",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31181.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:39"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31182.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin 12345 and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:60"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31183.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31184.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click the account details button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountDetailSteps.java:19"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31185.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should display all the account details",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountDetailSteps.java:24"
});
formatter.embedding("image/png", "images/bcfbeb05115148d79a4582bb21ff31186.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate whether user can see the account statement",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \u003caccountNumber\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the valid pin \u003cPIN\u003e and click on validate button",
  "keyword": "When "
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.step({
  "name": "user click Account Summary button",
  "keyword": "And "
});
formatter.step({
  "name": "User see the account statement in account summary",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "Password",
        "PIN"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@01",
        "12345"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate whether user can see the account statement",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the 1234556666 and MavDemo@01",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:39"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the valid pin 12345 and click on validate button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:60"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc3.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.java:17"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc4.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Account Summary button",
  "keyword": "And "
});
formatter.match({
  "location": "FundTransferSteps.java:92"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc5.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see the account statement in account summary",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferSteps.java:97"
});
formatter.embedding("image/png", "images/33bb7e60f3204c47b8a2b727409e90bc6.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/DemoBank.feature");
formatter.feature({
  "name": "Demo Bank site",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To validate if user see the warning message in Account PIN page when entering invalid Password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enter the \u003caccountNumber\u003e and \u003cInvalidPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User Should display the warning message when invalid password is given",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "InvalidPassword"
      ]
    },
    {
      "cells": [
        "1234556666",
        "MavDemo@02"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User login into Demo Bank site",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.java:19"
});
formatter.embedding("image/png", "images/49b193dabd2a4656aee43235c90ad07d0.png", null);
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate if user see the warning message in Account PIN page when entering invalid Password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web"
    },
    {
      "name": "@DemoTest"
    }
  ]
});
formatter.step({
  "name": "user enter the 1234556666 and MavDemo@02",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.java:29"
});
formatter.embedding("image/png", "images/49b193dabd2a4656aee43235c90ad07d1.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.java:39"
});
formatter.embedding("image/png", "images/49b193dabd2a4656aee43235c90ad07d2.png", null);
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should display the warning message when invalid password is given",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.java:48"
});
formatter.embedding("image/png", "images/49b193dabd2a4656aee43235c90ad07d3.png", null);
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
