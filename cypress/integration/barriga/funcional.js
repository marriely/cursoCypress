/// <reference types='cypress' />

import {EMAIL, SENHA, BTN_ENTRAR, MENU_SETTINGS, MENU_CONTAS, BTN_ADD_CONTA, NOME_CONTA, MENU_RESETAR, BTN_ALTERAR_CONTA, MESSAGE} from '../../support/elements/loginElements.js';

import data from '../../support/data/data.js';

import {} from '../../support/commandConta';


describe('Realizar login', () => {
    before(()=>{    
        cy.login(data.login.usuario, data.login.senha)
        cy.resetApp();    
     
    })//before 

    it('Inserir conta', ()=> {
        cy.acessoMenuConta();
        cy.adicionaConta(data.conta.nome);      
        cy.get(MESSAGE).should('contain',data.conta.mensagem_cadastro);            

    })//it add conta com sucesso

    it('Alterando conta', ()=>{
        cy.acessoMenuConta();
        cy.xpath(BTN_ALTERAR_CONTA).click();
        cy.adicionaConta(data.conta.alteracao);  
        cy.get(MESSAGE).should('contain',data.conta.mensagem_Alteracao);  

    }) //it alterar conta

    it('Inserir conta com nome repetido', ()=>{
        cy.acessoMenuConta();
        cy.adicionaConta('mercado alteração');
        cy.get(MESSAGE).should('contain', 'status code 400');
    })

})//describe


