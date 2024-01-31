describe('Test the login and signup pages', function() {

  beforeEach(() => {
    cy.visit('https://my.flowpay.io')
  });

  it('Test the login page', function() {
    cy.origin('https://flowpay.eu.auth0.com', () => {
      // login page by default
      cy.url()
        .should('include', 'https://flowpay.eu.auth0.com/u/login/')
      // login form
      cy.get('h1:contains(Welcome)')
        .should('be.visible')
      cy.contains('Log in to Flowpay to continue to My Flowpay')
        .should('be.visible')
      cy.get('input[inputmode="email"]')
        .should('be.visible')
      cy.get('button[name="action"]:contains(Continue)')
        .should('be.visible')
      cy.contains('Don\'t have an account?')
        .should('be.visible')
      cy.get('a:contains(Sign up)')
        .should('be.visible')
      cy.get('button:contains(Continue with Google)')
        .should('be.visible')
      cy.get('button:contains(Continue with Apple)')
        .should('be.visible')
    })
  })

  it('Test the signup page', function() {
    cy.origin('https://flowpay.eu.auth0.com', () => {
      // click to go to Signup page
      cy.get('a:contains(Sign up)')
        .click()
      cy.url()
        .should('include', 'https://flowpay.eu.auth0.com/u/signup/')
      // signup form
      cy.get('h1:contains(Create Your Account)')
        .should('be.visible')
      cy.contains('Sign Up to Flowpay to continue to My Flowpay')
        .should('be.visible')
      cy.get('input[inputmode="email"]')
        .should('be.visible')
      cy.get('button[name="action"]:contains(Continue)')
        .should('be.visible')
      cy.contains('Already have an account?')
        .should('be.visible')
      cy.get('a:contains(Log in)')
        .should('be.visible')
      cy.get('button:contains(Continue with Google)')
        .should('be.visible')
      cy.get('button:contains(Continue with Apple)')
        .should('be.visible')
    })
  })
})