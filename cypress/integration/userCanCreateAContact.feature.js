describe('user can create a contact', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Mauro')
		cy.get('#email').type('mauroeavellaneda@gmail.com')
		cy.get('#phone').type('0700 1010100764040738')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
		cy.get('#twitter').type('@mauro_avellaneda')

    })
})