/// <reference types="cypress" />

describe('Fixtures testes', () => {

    beforeEach(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })//hooks que faz antes do teste geral

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']//criando um objeto    
    foods.forEach(food=>{ //forEach ele vai realizar o meu teste(it) percorrendo o objeto
        it(`Cadastro com comida ${food}`, function() {
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('qualquer')
            cy.get(`[name="formSexo"][value=F`).click()//recurso do js que é colocar string entre ``(crase)
           // cy.get(`[name="formComidaFavorita"][value=${this.usuario.comida}]`).click()//this nao funciona mto bem com arrow function => preciso usar a palavra function
           cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`).click() //com o ``eu consigo fazer a interpolação usar a variavel criada no forEach
           cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
    
        })//it com foreach
    })//foreach

    it.only('Deve selecionar todos usando o each', ()=>{
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('qualquer')
            cy.get(`[name="formSexo"][value=F`).click()
          
        //   cy.get('[name="formComidaFavorita"]').click({multiple: true}) 
        cy.get('[name=formComidaFavorita]').each($el=>{ //no each eu tenho a função, ai dentro dessa função eu tenho controle
            // $el.click() aqui eu perco a rastreabilidade
            if($el.val() !== 'vegetariano') //a função val me retorna o value do elemento
                cy.wrap($el).click() //usando o wrap eu tenho acesso ao elemento do jquery, mas ainda mantenho a rastreabilidade do cypress
        })
           cy.get('#formEscolaridade').select('Doutorado')
            cy.get('#formEsportes').select('Corrida')
            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')
          // cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })// it todos   
 

})//describe