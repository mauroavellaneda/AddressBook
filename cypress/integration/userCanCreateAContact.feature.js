describe('user can create a contact', () => {
    beforeEach('test', () => {
        cy.visit('http://localhost:3474')
        cy.get('#add-contact').click()
        cy.get('#name').type('Mauro')
		cy.get('#email').type('mauroeavellaneda@gmail.com')
		cy.get('#phone').type('0764040738')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('@mauro_avellaneda')
        cy.get('#submit').click()

    })
    it('displays a name of the new contact', () => {
		cy.get('#contact-list').should('contain', 'Mauro')
	})
	
	it('displays the phone number of the new contact', () => {
		cy.get('#contact-list').should('contain', '0764040738')
	})
})