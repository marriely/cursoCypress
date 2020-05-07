/// <reference types='cypress' />

import {EMAIL, SENHA, BTN_ENTRAR} from '../../support/elements/loginElements.js';

describe('Realizar login', () => {
    beforeEach(()=>{
        cy.fixture('data').as('user').then(()=>{

        })
        cy.visit('http://barrigareact.wcaquino.me/')
    })//before
 

    it('Login com sucesso', ()=> {
                
        cy.get(EMAIL)
          .type('marriely@hotmail.com')  
          
        cy.get(SENHA)
            .type('M@rriely29')

        cy.get(BTN_ENTRAR)
            .click()

        cy.get('.toast').should('contain','Bem vindo')
            

    })//it login com sucesso

})//describe


