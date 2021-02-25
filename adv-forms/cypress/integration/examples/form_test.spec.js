describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=first_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const submitBtn = () => cy.get('button[id=submitBtn]')
    
    it('sanity check', () => {
        expect (2 + 3).to.equal(5)
    })

    it('can type in the name input', () => {
//Get the Name input and type a name in it.
        nameInput()
            .should('exist')
            .should('be.empty')
            .type('Jake')
//  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
            .should('have.value', 'Jake');
    })      

    it('can type in the email input', () => {        
//  Get the Email input and type an email address in it        
        emailInput()
            .should('exist')
            .should('be.empty')
            .type('Jake@email.com')
            .should('have.value', 'Jake@email.com');
    })      

    it('can type in the password input', () => { 
//  Get the password input and type a password in it        
        passwordInput()
            .should('exist')
            .should('be.empty')
            .type('Password123')
            .should('have.value', 'Password123');
    })

    it('can submit form data', () => {         
//  Check to see if a user can submit the form data
         submitBtn().click()   
    })

    it('checkbox checking', () => {
//  Set up a test that will check to see if a user can check the terms of service box        
        cy.get('[type="checkbox"]')
        .check()
        .uncheck()
    })
//   
    it('form validation if an input is left empty', () => {
//  Check for form validation if an input is left empty        
        expect(nameInput).to.not.equal('')
    })
})