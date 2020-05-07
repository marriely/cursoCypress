/// <reference types="cypress" />



describe('Helpers...', ()=> {
    it('Wrap', ()=>{
        const obj={nome:'User', idade:20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property','nome')

        cy.visit('http://wcaquino.me/cypress/componentes.html')
       /* // cy.get('#formNome').type('funciona?')
       cy.get('#formNome').then($el => {
         //  $el.type('e agora vai?') type é função do cypress
       // $el.val('agora vai via jquery') desse jeito vai, mas não devemos usar assim, devemos usar o cypress
       cy.wrap($el).type('agora vai pq usamos o wrap')



       })//promise .then o elemento q estou obtendo está no elemento el */
       const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(10)
        }, 500)
    }) //promise

    
    cy.get('#buttonSimple').then(()=>console.log('encontrei o primeiro botão'))
    //promise.then(num=> console.log(num))
    cy.wrap(promise).then(ret => console.log(ret))
    cy.get('#buttonList').then(()=>console.log('encontrei o segundo botão'))

    cy.wrap(1).then(num=>{
        return 2
    }).should('be.equal',2)    


    })//wrap

    it.only('its', ()=>{ //its me permite me pegar a propriedade do objeto e nao o objeto
        const obj={nome:'User', idade:20}
        cy.wrap(obj).should('to.have.property', 'nome', 'User')
        cy.wrap(obj).its('nome').should('be.equal', 'User') //com its eu estou pegando a propriedade nome

        const obj2 = {nome: 'User', idade: 20, endereco: {rua: 'dos bobos'}}

        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        cy.wrap(obj2).its('endereco.rua').should('contain', 'bobos')
        cy.wrap(obj2).its('endereco').its('rua').should('contain', 'bobos')

        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.title().its('length').should('be.equal', 20)
    })

    it.only('Invoke', ()=>{
        const getValue = () => 1;
        const soma = (a,b) => a+b //estou declarando uma função que recebe a e b e retorna a+b

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 5).should('be.equal',7)

        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val','funciona com invoke'); //aqui estou usando o invoke para usar o jquery(val)
        cy.window().invoke('alert','Dá pra ver?')
        cy.get('#resultado')
        .invoke('html', '<input type="button" value="meu teste" />')
    })

})//describe helpers