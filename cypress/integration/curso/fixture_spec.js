/// <reference types="cypress" />



describe('Fixtures testes', () => {
    it('Get data from fixture file', function() {
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.fixture('userData').as('usuario').then(()=>{
            cy.get('#formNome').type(this.usuario.nome)
            cy.get('#formSobrenome').type(this.usuario.sobrenome)
            cy.get(`[name="formSexo"][value=${this.usuario.sexo}]`).click()//recurso do js que é colocar string entre ``
            cy.get(`[name="formComidaFavorita"][value=${this.usuario.comida}]`).click()//this nao funciona mto bem com arrow function => preciso usar a palavra function
            cy.get('#formEscolaridade').select(this.usuario.escolaridade)
            cy.get('#formEsportes').select(this.usuario.esporte)
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
        })//then da fixture

        

   
    
        
    })//it

})//describe