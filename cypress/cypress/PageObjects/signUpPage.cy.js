class SignUpPage {

    // Locators
    header = "h1";
    radioButtonGroup = '[role="radiogroup"]';
    firstNameField = 'input[name="first_name"]';
    lastNameField = 'input[name="last_name"]';
    emailField = 'input[name="email"]';
    passwordField = 'input[name="password"]';
    checkbox = '[role="checkbox"][value="on"]';
    submitButton = 'button[type="submit"]';

    // Methods

    visit() {
        cy.visit('/signup');
    }

    verifyPageHeader(expectedText) {
        cy.get(this.header).should('have.text', expectedText);
    }

    enterFirstName(firstName) {
        cy.get(this.firstNameField).type(firstName);
    }

    enterLastName(lastName) {
        cy.get(this.lastNameField).type(lastName);
    }

    enterEmail(email) {
        cy.get(this.emailField).type(email);
    }

    enterPassword(password) {
        cy.get(this.passwordField).type(password);
    }

    acceptTermsAndConditions() {
        cy.get(this.checkbox).click();
    }

    submitForm() {
        cy.intercept('POST', '**/api/v1/auth/register/').as('register');
        cy.get(this.submitButton).click();
        cy.wait('@register', { timeout: 120000 }).its('response.statusCode').should('eq', 200);
    }

    verifySuccessfulRegistration() {
        cy.url().should('include', '/verify-email');
        cy.contains('Check your email').should('be.visible');
    }
}

export default SignUpPage;
