/// <reference types='cypress' />

import {EMAIL, SENHA, BTN_ENTRAR, MENU_SETTINGS, MENU_CONTAS, BTN_ADD_CONTA, NOME_CONTA, MENU_RESETAR, BTN_ALTERAR_CONTA, MESSAGE} from '../../support/elements/loginElements.js';

import data from '../../support/data/data.js';


describe('Realizar login', () => {
    beforeEach(()=>{        
        cy.visit('http://barrigareact.wcaquino.me/');
        cy.get(EMAIL).type(data.login.usuario);  
        cy.get(SENHA).type(data.login.senha);
        cy.get(BTN_ENTRAR).click();
        cy.get(MESSAGE).should('contain',data.login.mesagem);
       
     
    })//before
 

    it('Inserir conta', ()=> {
        //limpeza da conta antes de adicionar
        cy.get(MENU_SETTINGS).click();
        cy.get(MENU_RESETAR).click();

        cy.get(MENU_SETTINGS).click();
        cy.get(MENU_CONTAS).click();
        cy.get(NOME_CONTA).type(data.conta.nome);
        cy.get(BTN_ADD_CONTA).click();
        cy.get(MESSAGE).should('contain',data.conta.mensagem_cadastro);            

    })//it add conta com sucesso

    it('Alterando conta', ()=>{
        cy.get(MENU_SETTINGS).click();
        cy.get(MENU_CONTAS).click();
        cy.xpath(BTN_ALTERAR_CONTA).click();
        cy.get(NOME_CONTA).type(data.conta.alteracao)
        cy.get(BTN_ADD_CONTA).click();
        cy.get(MESSAGE).should('contain',data.conta.mensagem_Alteracao);  

    }) //it alterar conta

})//describe


