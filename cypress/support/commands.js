// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import data from '../support/data/data.js';
import {EMAIL, SENHA, BTN_ENTRAR, MENU_SETTINGS, MENU_RESETAR, MESSAGE} from '../support/elements/loginElements.js';

Cypress.Commands.add('clickAlert', (locator, message)=>{
    cy.get(locator).click()
    cy.on('window:alert', msg => { //aqui estou usando o on, que eu posso chegar todos os elementos do window
        console.log(msg) //o alert vai ter uma mensagem
        expect(msg).to.be.equal(message)
    })
  }) //clickAlert

  Cypress.Commands.add('login', (email, senha)=>{
    cy.visit('http://barrigareact.wcaquino.me/');
    cy.get(EMAIL).type(email);  
    cy.get(SENHA).type(senha);
    cy.get(BTN_ENTRAR).click();
    cy.get(MESSAGE).should('contain',data.login.mesagem);
  })// login

  Cypress.Commands.add('resetApp', ()=>{
    cy.get(MENU_SETTINGS).click();
    cy.get(MENU_RESETAR).click();
  })