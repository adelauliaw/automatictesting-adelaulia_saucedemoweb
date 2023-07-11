describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verify user should login successfully with valid username and password', () => {
    cy.get('#user-name').type('valid_username')
    cy.get('#password').type('valid_password')
    cy.get('#login-button').click()

    //Assertion
    cy.url().should('eq', 'https://www.saucedemo.com/')
    // cy.url().should('include', '/inventory.html')
    // cy.wait(2000)


  });


  it('User is showed error message with invalid username/password', () => {
    cy.get('#user-name').type('invalid_username')
    cy.get('#password').type('invalid_password')
    cy.get('#login-button').click()
    //Assertion
    cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    cy.url().should('eq', 'https://www.saucedemo.com/')
  })

  it('User is showed error message when username is not filled', () => {
    cy.get('#password').type('valid_password')
    cy.get('#login-button').click()

    cy.contains('Epic sadface: Username is required').should('be.visible')
  })

  it('User is showed error message when password is not filled', () => {
    cy.get('#user-name').type('valid_username')
    cy.get('#login-button').click()

    cy.contains('Epic sadface: Password is required').should('be.visible')
  })

  it('Load the site', () => {
    cy.get('.login_logo')
    cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user')
    cy.get('[data-test=password]').type('secret_sauce').should('have.value', 'secret_sauce')
    cy.get('#login-button').click()
  })
})