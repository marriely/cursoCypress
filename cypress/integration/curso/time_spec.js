/// <reference types='cypress' />

describe('work with basic element', () => {
    before(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })

    it('clock voltando ao passado', ()=> {

     //   cy.get('#buttonNow').click()
      //  cy.get('#resultado > span').should('contain', '26/04/2020')

        //cy.clock()
       // cy.get('#buttonNow').click()
       // cy.get('#resultado > span').should('contain', '31/12/1969')

        const dt = new Date(2012, 3, 10, 15, 23, 50)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')


    })

    it.only('Tick vai para o futuro', ()=>{
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '158')
        cy.get('#resultado > span').invoke('text').then(t=> {
            const number = parseInt(t)
            cy.wrap(number).should('gt', 1589719172931)
        })
         
    })

})