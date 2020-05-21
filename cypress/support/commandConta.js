

import {MENU_SETTINGS, MENU_CONTAS, BTN_ADD_CONTA, NOME_CONTA} from '../support/elements/loginElements.js';

Cypress.Commands.add('acessoMenuConta', ()=>{
    cy.get(MENU_SETTINGS).click();
    cy.get(MENU_CONTAS).click();
})//acesso ao menu conta

Cypress.Commands.add('adicionaConta', (conta)=>{
    cy.get(NOME_CONTA).type(conta);
    cy.get(BTN_ADD_CONTA).click();
})//adiciona conta



  

