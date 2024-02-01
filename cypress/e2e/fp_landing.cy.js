describe('Test the Flowpay landing page', () => {

  beforeEach('visit the website', () => {
    cy.visit('https://www.flowpay.io')
    cy.get('#cookiescript_close')
      .click()
    cy.get('#cookiescript_wrapper')
      .should('not.be.visible')
  })

  const partnerPlatforms = [
    'Dotykačka',
    'Shoptet Boost',
    'Shopify',
    'Storyous',
    'Woocmmerce', // typo!
    'Magento',
    'Inventoro',
    'Tanganica',
    'Google Analytics',
    'Dropshipping.cz',
    'Fulfillment.cz',
    'Foodora',
  ]
  
  it('should check the header entries', () => {
    cy.get('#SITE_HEADER')
      .within(() => {
        cy.get('a:contains(Kalkulačka)')
          .should('be.visible')
        cy.get('a:contains(Reference)')
          .should('be.visible')
        cy.get('a:contains(O nás)')
          .should('be.visible')
        cy.get('a:contains(Partneři)')
          .should('be.visible')
        cy.get('button:contains(Přihlásit se)')
          .should('be.visible')
        cy.get('button:contains(Chci financování)')
          .should('be.visible')
      })
  });

  it('should check Kalkulačka entry', () => {
    cy.get('a:contains(Kalkulačka)')
      .eq(0)
      .click({force: true})
    cy.url()
      .should('include', '/financing-info')
    cy.contains('Spočítejte si financování podle svého')
      .should('be.visible')
    cy.contains('Nabídka na pár kliknutí')
      .should('be.visible')
  });

  it('should check Partneři entry', () => {
    cy.get('a:contains(Partneři)')
      .click({force: true})
    cy.url()
      .should('include', '/platforms')
    let partner
    for (partner in partnerPlatforms )
      cy.get('h3 [style="font-size:28px;"]')
        .contains(partnerPlatforms[partner])
        .should('be.visible')
  });
});