@web @DemoTest
Feature: Demo Bank site
	
  Background: 
    Given User login into Demo Bank site
    
  Scenario Outline: To validate if user see the warning message in Account PIN page when entering invalid Password
    When user enter the <accountNumber> and <InvalidPassword>
    And Click the Login button
    Then User Should display the warning message when invalid password is given

    Examples: 
      | accountNumber | InvalidPassword |
      | 1234556666		| MavDemo@02      |
	
  Scenario Outline: To validate if user can navigate to home page with valid credentials
    When user enter the <accountNumber> and <Password>
    And Click the Login button
    And User navigate to account pin field
    When User enter the valid pin <PIN> and click on validate button
    Then User should navigate to Home Page

    Examples: 
      | accountNumber | Password   | PIN   |
      | 1234556666		| MavDemo@01 | 12345 |
	
  Scenario Outline: To validate if user see the warning message when any of mandatory field is missing
    When user enter the <accountNumber> and <Password>
    And Click the Login button
    When User enter the valid pin <PIN> and click on validate button
    Then User should navigate to Home Page
    And User click on Fund Transfer Tab
    And User clicks the FundTransfer button
    Then User see the warning message when mandatory field is missing

    Examples: 
      | accountNumber | Password   | PIN   |
      | 1234556666		| MavDemo@01 | 12345 |
	
  Scenario Outline: To validate whether user see the successful transaction message and reference number generated
    When user enter the <accountNumber> and <Password>
    And Click the Login button
    When User enter the valid pin <PIN> and click on validate button
    Then User should navigate to Home Page
    And User click on Fund Transfer Tab
    And User inputs the <ReceiverBankName>, <ReceiverName>, <ReceiverAccountNumber>,<RoutingNumber>, <Amount> and <Description> to complete the fund transfer
    And User clicks the FundTransfer button
    And user enter authentication code as <AuthorizationCode> and click validate button
    Then User see success message and reference no will be generated

    Examples: 
    | accountNumber | Password   | PIN   | ReceiverBankName | ReceiverName | ReceiverAccountNumber | RoutingNumber | Amount | Description                 | AuthorizationCode |
  	| 1234556666		| MavDemo@01 | 12345 | DigiBank         | EtherTent    | 1234567890						 | 87654321 		 | 15			| This is for Testing Purpose | 123456						 |
	
  Scenario Outline: To validate whether user can see the account statement
    When user enter the <accountNumber> and <Password>
    And Click the Login button
    When User enter the valid pin <PIN> and click on validate button
    Then User should navigate to Home Page
    And user click Account Summary button
    Then User see the account statement in account summary

    Examples: 
      | accountNumber | Password   | PIN   |
      | 1234556666		| MavDemo@01 | 12345 |
	
  Scenario Outline: To validate whether user can see the account details
    When user enter the <accountNumber> and <Password>
    And Click the Login button
    When User enter the valid pin <PIN> and click on validate button
    Then User should navigate to Home Page
    And user click the account details button
    Then user should display all the account details

    Examples: 
      | accountNumber | Password   | PIN   |
      | 1234556666	  | MavDemo@01 | 12345 |
                