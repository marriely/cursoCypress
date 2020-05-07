/// <reference types='cypress' />

describe('Esperas...', () => {
    before(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })//hooks que faz antes do teste geral

    beforeEach(() =>{
        cy.reload()
    }) //antes de cada um teste

    it('Deve aguardar o elemento estar visível', ()=>{
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo').should('exist');
        cy.get('#novoCampo').type('funciona');

    })//espera simples

    it.only('Deve fazer retry', ()=>{
        cy.get('#novoCampo').should('not.exist');
        cy.get('#buttonDelay').click();
        cy.get('#novoCampo').should('not.exist');
        cy.get('#novoCampo')
           // .should('not.exist')
            .should('exist')
            .type('funciona')

    })//retry

    it.only('Uso do find', ()=>{
        cy.get('#buttonList').click();
        cy.get('#lista li')
            .find('span')
            .should('contain','Item 1')

        //cy.get('#lista li')
         //   .find('span')
          //  .should('contain','Item 2')
        // para encontrar o elemento eu preciso buscar por ele por completo.
        cy.get('#lista li span')
          .should('contain','Item 2')

    })//find

    it.only('Uso do timeout', ()=>{
      //  cy.get('#buttonDelay').click();
        //cy.get('#novoCampo', {timeout:1000}).should('exist'); 
        //posso definir um tempo de timout para cada ação, mas isso não compesa, o ideal é alterar para todos
       // cy.get('#novoCampo').should('exist'); 

       cy.get('#buttonList').click();
      // cy.wait(5000);
       cy.get('#lista li span')
       .should('have.length',1)
       cy.get('#lista li span')
       .should('have.length',2)


    })//uso do timeout

    it.only('Click retry', ()=>{
        cy.get('#buttonCount').click()
            .should('have.value', '1')
    })//nem todos tem retry

    it.only('Should vs Then', ()=>{
        cy.get('#buttonList').should($el=>{
       
        // cy.get('#lista li span').should($el=>{ //estou fazendo a busca, mas estou colocando dentro de um promisse que pode ser com should ou then
               //.should('have.length',1)
           // console.log($el)
             expect($el).to.have.length(1)
         }).and('have.id','buttonList')
          

    })

})//describe