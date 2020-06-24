/// <reference types='cypress' />

describe('Acesso americada', ()=>{

    it('Faz pesquisa e ordenação', ()=>{
        cy.visit('https://www.americanas.com.br/');
        cy.get('#h_search-input').type('tv smart');
        cy.get('#h_search-btn').click();
        cy.get('select').select('Menores Preços').should('have.value', 'lowerPrice');
      


    })//it

})//describe