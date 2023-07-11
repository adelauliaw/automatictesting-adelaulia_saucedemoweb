describe('User Add Product', () => {
  it('should successfully add a product to the cart', () => {
    it('User successfully adds a product to the cart', () => {
      cy.login('valid_username', 'valid_password');

      cy.get('.inventory_item')
        .first()
        .within(() => {
          cy.get('.btn_primary').click();
        });

      cy.get('.shopping_cart_badge').should('have.text', '1');
    });


    it('User cannot add a product to the cart if not logged in', () => {
      cy.visit('/inventory.html');

      cy.get('.inventory_item')
        .first()
        .within(() => {
          cy.get('.btn_primary').click();
        });

      cy.url().should('include', '/login.html');
      cy.contains('Epic sadface: You can only access "/inventory.html" when logged in.').should('be.visible');
    });
  });
});
