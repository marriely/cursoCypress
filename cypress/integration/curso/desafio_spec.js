/// <reference types='cypress' />

describe('Desafio', () => {
    before(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })//hooks que faz antes do teste geral

    beforeEach(() =>{
        cy.reload()
    })

    it('Salvar validando mensagem', ()=>{
        const stub = cy.stub().as('alerta') //o as da nome //const stub eu criei um objeto e estou criando o stub
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(()=>{expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')})

        cy.get('#formNome').type('marry');
        cy.get('#formCadastrar').click()
        .then(()=>{expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')})
    
        cy.get('[data-cy=dataSobrenome]').type('garcia');
        cy.get('#formCadastrar').click()
        .then(()=>{expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')})

        cy.get('#formSexoFem')
        .click()
       
        cy.get('#formCadastrar').click();

        cy.get('#resultado > :nth-child(1)').should('contain','Cadastrado!')


    })//it

})//describe