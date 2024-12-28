// describe('Sign up tests', () => {

//     beforeEach(() => {
//         cy.visit('/signup')
//     })

//     it('should successfully register with valid details', () => {
//         // Verify current page is the registration page
//         cy.get("h1").should('have.text', 'Sign up')

//         // Fill users details
//         cy.get('[role="radiogroup"]').find('label[for="1"]').click()

//         cy.get('input[name="first_name"]').type("Favour")
//         cy.get('input[name="last_name"]').type("Adedapo")
//         cy.get('input[name="email"]').type("voma@gmail.com")
//         cy.get('input[name="password"]').type("Ade@358tayo")

//         cy.get('[role="checkbox"][value="on"]').click()

//         cy.intercept('POST', '**/api/v1/auth/register/').as('register');
//         cy.get('button[type="submit"]').click()

//         cy.wait('@register', { timeout: 120000 }).its('response.statusCode').should('eq', 200);
//         // Verify registration was successful
//         cy.url().should('include', '/verify-email')
//         cy.contains('Check your email').should('be.visible')
//     });
// });
