

//http://wcaquino.me/cypress/componentes.html

/// <reference types="cypress" /> 

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html')

        cy.title().should('be.equal','Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //cy.title().debug();

        let syncTitle

        cy.title().then(title =>{ //posso usar o then e / ou should
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => { //quando uso o .then é uma promise, tudo que faço dentro disso o cypress consegue controlar a sincronização
            $el.val(syncTitle) //aqui é usando jquery, por baixo dos panos, não vejo o log de execução
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle) //aqui eu tenho o log, pq ao usar o wrap eu uso o cypree
        })
    })
    
    

   

    it('Should find and interact with an element', () =>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value','Obrigado!')
    })
})

