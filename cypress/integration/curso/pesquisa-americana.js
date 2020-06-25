/// <reference types='cypress' />

describe('Acesso americada', ()=>{

    before(()=>{
        cy.visit('https://www.americanas.com.br/');
    })

    it('Faz pesquisa e ordenação', ()=>{
        
        cy.get('#h_search-input').type('tv smart');
        cy.get('#h_search-btn').click();
      
      


    })//it

    it('Faz ordenação', ()=>{
        cy.get('select').select('Menores Preços').should('have.value', 'lowerPrice');
    })

})//describe