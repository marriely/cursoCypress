/// <reference types='cypress' />

describe('work with iframe', () => {

    it('Deve preencher campo de texto', ()=>{
        cy.visit('http://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe =>{
            const body = iframe.contents().find('body') //estou pegando o conteudo e buscando(find) o que tem no body dele
            cy.wrap(body).find('#tfield') //eu preciso usar o wrap pois obtve o body do iframe pela promise
            .type('funciona?')
            .should('have.value', 'funciona?')

            
        })
           
    })

    it('Deve testar o frame diretamente', ()=>{
        cy.visit('http://wcaquino.me/cypress/frame.html')
       cy.get('#otherButton').click()
       
       cy.on('window:alert', msg=>{
        expect(msg).to.be.equal('Click OK!')
    })
    })

})
