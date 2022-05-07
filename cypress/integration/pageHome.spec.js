const music = {
	name: 'Falamansa - Xote dos Milagres',
	youtubeLink: 'https://www.youtube.com/watch?v=chwyjJbcs1Y',
};

describe('Add music to page and vote the recommendation', () => {
	it('should add a music recommendation to the home page', () => {
		cy.resetDatabase();

		cy.addRecommendation();
		cy.contains(music.name);
		cy.contains('0');
		cy.end();
	});

	it('should increase the vote count', () => {
		cy.get('article svg:first').click();

		cy.contains('1');
		cy.end();
	});

	it('should decrease the vote count', () => {
		cy.get('article svg:last').click();

		cy.contains('0');
		cy.end();
	});
});

describe('Delete the recommendation', () => {
	it('should delete the recommendation when the vote count gets to -5', () => {
		cy.get('article').within(() => {
			for (let i = 0; i <= 5; i++) {
				cy.get('svg:last-of-type').click();
			}
		});

		cy.get(music.name).should('not.exist');
	});
});
