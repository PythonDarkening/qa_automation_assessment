import BaseClass from "../../support/baseClass";
import ComputerDatabaseMap from "../maps/computerDatabaseMap";

class ComputerDatabasePage extends BaseClass {
  constructor() {
    super();
    this.url = 'https://computer-database.gatling.io/computers';
  }
  
  open() {
    this.visit(this.url);
  }

  typeSearch(target) {
    cy.get(ComputerDatabaseMap.SEARCH_BOX).type(target);
  }

  submitSearch() {
    cy.get(ComputerDatabaseMap.SEARCH_SUBMIT).click();
  }

  clickOnComputerName(name) {
    cy.get(ComputerDatabaseMap.COMPUTER_LINK).contains(name).click();
  }

  saveComputer() {
    cy.get(ComputerDatabaseMap.SAVE_BUTTON).click();
  }

  verifyAlertMessage(message) {
    cy.get(ComputerDatabaseMap.ALERT_MESSAGE_WARNING).should('contain', message);
  }

  isNextButtonDisabledPresent(){
    return cy.get('body').then((body) => {
      return cy.wrap(body.find(ComputerDatabaseMap.NEXT_BUTTON_DISABLED).length > 0);
    });
  }

  clickNextButtonUntilLastPageIsPresent() {
    this.isNextButtonDisabledPresent().then((visible) => {
      if (!visible) {
        this.clickOnNextButton();
        this.clickNextButtonUntilLastPageIsPresent();
      }
    });
  }

  clickOnNextButton(){
    cy.get(ComputerDatabaseMap.NEXT_BUTTON_ENABLED).click();
  }

  printComputerNames() {
    cy.get(ComputerDatabaseMap.COMPUTERS_NAMES).each(($element) => {
      cy.log($element.text());
    });
  }

  clickOnAddComputerButton() {
    cy.get(ComputerDatabaseMap.ADD_COMPUTER_BUTTON).click();
  }
}

export default new ComputerDatabasePage();
