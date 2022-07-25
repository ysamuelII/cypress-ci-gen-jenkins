
const search = `input[name='s']`

class SearchPage{
    constructor(){
        
    }
    static currentPost(){
        cy.get(search).clear()
        cy.get('.menu-item.menu-item-35.menu-item-home.menu-item-object-custom.menu-item-type-custom')
        .click()

        expect('.col-md-9.col-xs-12 > div:nth-of-type(1)').to.exist
    }

    static searchBlog(name){
        cy.get(search).clear()
        cy.get(search)
        .type(name+'{enter}')

        expect('.search-result').to.exist
    }

}

export default SearchPage
