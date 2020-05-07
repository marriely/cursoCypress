/// <reference types='cypress' />

describe('work with basic element', () => {
    before(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })//hooks que faz antes do teste geral

    beforeEach(() =>{
        cy.reload()
    }) //antes de cada um teste

    it('Text', () => {
        
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    }) //text

    it('Link', ()=>{
       
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        
        cy.get('#resultado').should('have.text', 'Voltou!')

    }) //link

    it('TextFields', () =>{
        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')
        cy.get('#elementosForm\\:sugestoes') // o \\: é como se fosse so o \:
            .type('Cypress textArea')
            .should('have.value', 'Cypress textArea')
            
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('teste')         
        cy.get('[data-cy=dataSobrenome]')
            .type('teste123456{backspace}')
            .should('have.value', 'teste12345')

        cy.get('#elementosForm\\:sugestoes') // o \\: é como se fosse so o \:
            .clear()
            .type('Erro{selectall}acerto', {delay: 100}) //util só para criação do script
            .should('have.value', 'acerto')
    }) //textfield

    it('RadioButton', ()=> {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')

        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get('[name="formSexo"]')
            .should('have.length', 2)

    })//radionbutton

    it('Checkbox', ()=>{
        cy.get('#formComidaCarne')
            .click()
            .should('be.checked')

        cy.get('[name="formComidaFavorita"]')
        .click({ multiple: true } ); //clicar em vários

        cy.get('#formComidaCarne')
            .should('not.be.checked')

        cy.get('#formComidaFrango')
            .should('be.checked')   


    })//checkbox

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')
        //boa pratica verificar a quantidade de elementos do combo
       
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length',8)

        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)
            })
            expect(values).to.include.members(["Superior", "Mestrado"])
        })

    }) //combo
  

    it.only('Combo multiplo', ()=> {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao','Corrida','nada'])

      //  cy.get('[data-testid=dataEsportes]')
         //   .should('have.value',['natacao','Corrida','nada']) //isso não é o melhor pois tem hora q ele nao entede

        cy.get('[data-testid=dataEsportes]').then($el =>{
            expect($el.val()).to.be.deep.equal(['natacao','Corrida','nada']) //o val tbm obtem o value
            expect($el.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]')
            .invoke('val') //o invoke eu posso chamar os metodos/atributos direto do jquerry
            .should('eql', ['natacao','Corrida','nada']) //eql é como se fosse o deep.equal

    })// combo multiplo
   





    

    
})
