import AddComputerMap from "../maps/addComputerMap";

class AddComputerPage {

    enterComputerName(name) {
        cy.get(AddComputerMap.COMPUTER_NAME_INPUT).type(name);
    }
    
    enterIntroducedDate(date) {
        cy.get(AddComputerMap.INTRODUCED_DATE_INPUT).type(date);
    }

    enterDiscontinuedDate(date) {
        cy.get(AddComputerMap.DISCONTINUED_DATE_INPUT).type(date);
    }

    selectOptionFromCompanyDropdown(option) {
        cy.get(AddComputerMap.COMPANY_DROPDOWN).select(option);
    }

    clickOnCreateThisComputerButton() {
        cy.get(AddComputerMap.CREATE_THIS_COMPUTER_BUTTON).click();
    }
}

export default new AddComputerPage();