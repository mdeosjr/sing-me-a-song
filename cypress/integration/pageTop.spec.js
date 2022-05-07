describe('Navigate to page Top', () => {
	it('should go to page Top when the button is clicked', () => {
		cy.visit('http://localhost:3000');
		cy.contains('Top').click();
		cy.url().should('eq', 'http://localhost:3000/top');

		cy.end();
	});
});

describe('Order of recommendations', () => {
	it('should be in descending order of upvotes', () => {
		let firstCount;
		cy.resetDatabase();
		cy.seedDatabase();

		cy.get('article:first div:last').should('have.text', '10');
		cy.get('article:last div:last').should('have.text', '0');

		cy.end();
	});
});

// cy.get('article:first div:last').then((count) => {
// 	firstCount = count.text();
// 	cy.wrap(firstCount).as('firstCount');
// });
