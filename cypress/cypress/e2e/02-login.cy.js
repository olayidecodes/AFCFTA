describe('Sign in tests', () => {

    beforeEach(() => {
        cy.visit('/signin')
    })

    it('should successfully login with valid details', () => {
        // Verify current page is the registration page
        cy.get("h1").should('have.text', 'Welcome Back')

        // Fill users details
        cy.get('input[name="email"]').type("olayidecodes@gmail.com")
        cy.get('input[name="password"]').type("Password@987")


        cy.intercept('POST', '**/api/v1/auth/register/').as('login');
        cy.contains('button', "Sign In").click()

        cy.wait('@login', { timeout: 120000 }).its('response.statusCode').should('eq', 200);
        // Verify registration was successful
        cy.url().should('include', '/')
    });
});
