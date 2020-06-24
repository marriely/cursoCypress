/// <reference types='cypress' />

import {FN_XP_BTN_ALTERAR_CONTA, EMAIL, SENHA, BTN_ENTRAR, MENU_SETTINGS, MENU_CONTAS, BTN_ADD_CONTA, NOME_CONTA, MENU_RESETAR, BTN_ALTERAR_CONTA, MESSAGE, MENU_MOVIMENTACAO, DESCRICAO_MOVIMENTACAO, VALOR_MOVIMENTACAO, INTERESSADO_MOVIMENTACAO, BTN_ADD_MOVIMENTACAO, FN_XP_BUSCA_ELEMENTO, LINHAS_MOVIMENTACAO, STATUS_MOVIMENTACAO, MENU_INICIAL, FN_XP_SALDO_CONTA, CONTA_MOVIMENTACAO} from '../../support/elements/Elements.js';

import data from '../../support/data/data.js';

import {} from '../../support/commandConta';


describe('Realiza fluxo funcional', () => {
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
        cy.xpath(FN_XP_BTN_ALTERAR_CONTA(data.conta.nome)).click();
        cy.adicionaConta(data.conta.alteracao);  
        cy.get(MESSAGE).should('contain',data.conta.mensagem_Alteracao);  

    }) //it alterar conta

    it('Inserir conta com nome repetido', ()=>{
        cy.acessoMenuConta();
        cy.adicionaConta('mercado alteração');
        cy.get(MESSAGE).should('contain', 'status code 400');
    })// it conta com nome repetido

    it('Deve criar uma movimentação', ()=>{
        cy.get(MENU_MOVIMENTACAO).click();
        cy.get(DESCRICAO_MOVIMENTACAO).type('Teste 1');
        cy.get(VALOR_MOVIMENTACAO).type('50');
        cy.get(INTERESSADO_MOVIMENTACAO).type('Marry');
        cy.get(STATUS_MOVIMENTACAO).click();
        cy.get(CONTA_MOVIMENTACAO).select('mercado alteração');
        cy.get(BTN_ADD_MOVIMENTACAO).click();
        cy.get(MESSAGE).should('contain', 'sucesso');
        cy.get(LINHAS_MOVIMENTACAO).should('have.length', 7); //aqui como eu tenho controle da massa de dados, eu sei que toda inserção deverá ter uma listagem com 7 registros.
        cy.xpath(FN_XP_BUSCA_ELEMENTO('Teste 1','50')).should('exist');
    })//it criar movimentação

    it('Consulta extrato', ()=>{
        cy.get(MENU_INICIAL).click();
        cy.xpath(FN_XP_SALDO_CONTA('mercado alteração')).should('contain', '50')

    })

})//describe teste funcional


