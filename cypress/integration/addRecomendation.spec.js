describe('Add music to page', () => {
	it('should add a music recommendation to the home page', () => {
		const music = {
			name: 'Falamansa - Xote dos Milagres',
			youtubeLink: 'https://www.youtube.com/watch?v=chwyjJbcs1Y',
		};

		cy.visit('http://localhost:3000');

		cy.get('input[placeholder="Name"]').type(music.name);
		cy.get('input[placeholder="https://youtu.be/..."]').type(
			music.youtubeLink
		);

		cy.intercept('POST', 'http://localhost:5000/recommendations').as(
			'addRecommendations'
		);

		cy.get('button').click();

		cy.wait('@addRecommendations');

        cy.contains(music.name);
	});
});
