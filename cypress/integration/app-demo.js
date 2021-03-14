describe('Web App Intergration Testing Demo', function() {
  beforeEach(() => {
    cy.restoreLocalStorage();
  });
  afterEach(() => {
    cy.saveLocalStorage();
  });

  it('Should display the main page with all Game of Thrones houses', function() {
    cy.visit('/')
      .get('[data-hook="houses-container"]')
      .should('have.length', 1)
      .get('[data-hook="house-overview"]')
      .should('have.length', 50)
  })

  it('Should display the main page with a home button', function() {
    cy.visit('/')
      .get('[data-hook="home-button"]')
      .should('have.length', 1)
  })

  it('Should navigate to house details on clicking a house overview', function() {
    cy.visit('/')
      .get('[data-hook="house-overview"]').eq(0).click()
      .url()
      .should('include', '/houses/1')
  })
  
  it('Should display the house overview page with detailed information', function() {
    cy.visit('/houses/1')
      .get('[data-hook="house-details"]')
      .should('have.length', 1)
  })
  
  it('Should navigate to the home page on clicking the home button', function() {
    cy.visit('/houses/1')
      .get('[data-hook="home-button"]').click()
      .url()
      .should('eq', 'http://localhost:3000/')
  })
})