describe('url page', () => {
  beforeEach (() => {
    // cy.fixture("get_fixture").then((json) => {
    //   cy.intercept("GET", "http://localhost:3001/api/v1/urls", json);
    //   cy.visit("http://localhost:3000/");
    // });
  })

  it('should show page title and existing URLs', () => {
    cy.visit("http://localhost:3000");
    cy.get('h1').contains("URL Shortener")
    cy.get(':nth-child(1) > a').contains("http://localhost:3001/useshorturl/1")
  })

  it('should show the Form and inputs', () => {
    cy.get('[placeholder="Title..."]').should('be.visible')
    cy.get('[placeholder="URL to Shorten..."]').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('should reflect the input that the user types in the form', () => {
    cy.get('[placeholder="Title..."]')
      .type('Hello')
      .should('be.visible')
    cy.get('[placeholder="URL to Shorten..."]')
    .type('Hello')
    .should('be.visible')
  })
})

describe('form post', () => {
  beforeEach (() => {
    
  })
})
