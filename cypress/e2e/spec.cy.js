describe('url page', () => {
  beforeEach (() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      urls: [
        {
            id: 2,
            title: "Awesome Photo",
            long_ur: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            short_url: "http://localhost:3001/useshorturl/1"
        }
      ]    
    })
    cy.visit('http://localhost:3000/')
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
      .clear()
    cy.get('[placeholder="URL to Shorten..."]')
    .type('World')
    .should('be.visible')
    .clear()
  })
})

describe('form post', () => {
  it('should show the new url when a user fills the form and submits', () => {
    cy.intercept('POST','http://localhost:3001/api/v1/urls',{
          title: "Photo",
          long_url: "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          short_url: "http://localhost:3001/useshorturl/1"  
    })
  cy.get('[placeholder="Title..."]').type('Photo')
  cy.get('[placeholder="URL to Shorten..."]').type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  cy.get('button').click()
  cy.get('section > :nth-child(2)').contains('Photo')
  cy.get('section > :nth-child(2)').contains('http://localhost:3001/useshorturl/1')
  })
})
