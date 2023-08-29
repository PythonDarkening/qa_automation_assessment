import ComputerDatabasePage from "../ui/pages/computerDatabasePage";
import AddComputerPage from "../ui/pages/addComputerPage";

describe('QA Testing Assessment', function() {

  beforeEach(() => {
    ComputerDatabasePage.open();
  });

  it('Scenario #1: Commodore 64 Computer', function() {
    let targetComputer = 'Commodore 64';
    ComputerDatabasePage.typeSearch(targetComputer);
    ComputerDatabasePage.submitSearch();
    cy.get('a').contains(targetComputer).should('exist');
    ComputerDatabasePage.clickOnComputerName(targetComputer);
    ComputerDatabasePage.saveComputer();
    ComputerDatabasePage.verifyAlertMessage(`Computer ${targetComputer} has been updated`);
  });

  it('Scenario #2: HP Computers', function() {
    let targetComputer = 'HP';
    ComputerDatabasePage.typeSearch(targetComputer);
    ComputerDatabasePage.submitSearch();
    ComputerDatabasePage.printComputerNames();
  });

  it('Scenario #3: IBM Computers', function() {
    let targetComputer = 'IBM';
    ComputerDatabasePage.typeSearch(targetComputer);
    ComputerDatabasePage.submitSearch();
    ComputerDatabasePage.clickNextButtonUntilLastPageIsPresent();
    ComputerDatabasePage.printComputerNames();
  });

  it('Scenario #4: Create a computer', function() {
    let computerToBeCreated = 'Toshiba';
    ComputerDatabasePage.clickOnAddComputerButton();
    AddComputerPage.enterComputerName(computerToBeCreated);
    AddComputerPage.enterIntroducedDate('2019-01-01');
    AddComputerPage.enterDiscontinuedDate('2021-01-01');
    AddComputerPage.selectOptionFromCompanyDropdown('Evans & Sutherland');
    AddComputerPage.clickOnCreateThisComputerButton();
    ComputerDatabasePage.verifyAlertMessage(`Computer ${computerToBeCreated} has been created`);
  });

});
