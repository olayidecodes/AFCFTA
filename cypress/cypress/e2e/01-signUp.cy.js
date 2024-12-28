import SignUpPage from "../PageObjects/signUpPage.cy";

const signup = new SignUpPage();

before(() => {
  cy.fixture('signUpData.json').then(function(data) {
    globalThis.data = data;
  });
});

beforeEach(() => {
  signup.visit();
});

describe('SignUp Page Test Cases', () => {

  it('Verify the title of Sign up page', () => {
    signup.verifyPageHeader(data.expectedText);
  });

  it('Verify the error shows when entering an invalid email', () => {
    
  });

  it('Verify the app shows an error when the user enters an already registered email', () => {
    
  });

  it('Verify the user can sign up with a valid email', () => {

    // Clear saved cache
    cy.clearLocalStorage();
    cy.getAllLocalStorage().should('be.empty');

    signup.enterFirstName(data.firstName);
    signup.enterLastName(data.lastName);
    signup.enterEmail(data.email);
    signup.enterPassword(data.password);
    signup.acceptTermsAndConditions();
    signup.submitForm();
    signup.verifySuccessfulRegistration();
  });

});
