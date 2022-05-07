describe('Navigate to page Random', () => {
	it('should go to page Random when the button is clicked', () => {
		cy.visit('http://localhost:3000');
		cy.contains('Random').click();
		cy.url().should('eq', 'http://localhost:3000/random');
		cy.end();
	});
});
