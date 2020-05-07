/// <reference types='cypress' />

describe('work with alert', () => {
    before(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })//hooks que faz antes do teste geral

    beforeEach(() =>{
        cy.reload()
    })

    it.only('Alert', ()=>{
        //cy.get('#alert').click()
       // cy.on('window:alert', msg => { //aqui estou usando o on, que eu posso chegar todos os elementos do window
      //      console.log(msg) //o alert vai ter uma mensagem
      //      expect(msg).to.be.equal('Alert Simples')
      //  })
      cy.clickAlert('#alert','Alert Simples')
    })

    it.only('Alert with mock', ()=>{
        const stub = cy.stub().as('alerta') //o as da nome //const stub eu criei um objeto e estou criando o stub
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
            //eu chamei o zero, pois é um array indexado em zero
        })
      
    })

    it.only('Confirm', ()=>{
        
        cy.on('window:confirm', msg => { //estou pegando um popup de confirmação e recebendo o seu texto
            expect(msg).to.be.equal('Confirm Simples')
            //o confirm tem uma pergunta de confirmação
        })
        cy.on('window:alert', msg => { //esotu pegando o alert
            expect(msg).to.be.equal('Confirmado') //o padrão é ele clicar no ok
        })

        cy.get('#confirm').click()
    })

    it.only('Deny', ()=>{
        
        cy.on('window:confirm', msg => { //estou pegando um popup de confirmação e recebendo o seu texto
            expect(msg).to.be.equal('Confirm Simples')
            return false //isso já é o suficiente para clicar no outro
        })
        cy.on('window:alert', msg => { //esotu pegando o alert
            expect(msg).to.be.equal('Negado') 
        })

        cy.get('#confirm').click()
    })

    it.only('Prompt', ()=>{
        cy.window().then(win => { //cy.window eu tenho acesso a tudo da tela, o then estou colocando dentro de uma promisse
            cy.stub(win, 'prompt').returns('42')//para trabalhar com windom precisa ter uma promise, e vou criar um objeto nessa promise
        })//com stub eu vou tentar sobreescrever o comportamento do window
        
       cy.on('window:confirm', msg => { //estou pegando um popup de confirmação e recebendo o seu texto
            expect(msg).to.be.equal('Era 42?')
            //o confirm tem uma pergunta de confirmação
        })
        cy.on('window:alert', msg => { //esotu pegando o alert
            expect(msg).to.be.equal(':D') //o padrão é ele clicar no ok
        })
        cy.get('#prompt').click()
        
    })

    



})//describe