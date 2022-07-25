
class LoginLinkedinPage {

    loginForm(user, password){
        cy.contains('Sign in').should('exist').click()

        cy.get('#username').type(user)
        cy.get('#password').type(password)
        cy.get('.btn__primary--large').should('contain', 'Sign in').click().should('not.exist')
    }

}

export default new LoginLinkedinPage