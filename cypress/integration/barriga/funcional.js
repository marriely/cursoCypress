/// <reference types='cypress' />

import {FN_XP_BTN_ALTERAR_CONTA, EMAIL, SENHA, BTN_ENTRAR, MENU_SETTINGS, MENU_CONTAS, BTN_ADD_CONTA, NOME_CONTA, MENU_RESETAR, BTN_ALTERAR_CONTA, MESSAGE, MENU_MOVIMENTACAO, DESCRICAO_MOVIMENTACAO, VALOR_MOVIMENTACAO, INTERESSADO_MOVIMENTACAO, BTN_ADD_MOVIMENTACAO, FN_XP_BUSCA_ELEMENTO, LINHAS_MOVIMENTACAO, STATUS_MOVIMENTACAO, MENU_INICIAL, FN_XP_SALDO_CONTA, CONTA_MOVIMENTACAO, MENU_EXTRATO, FN_XP_EXCLUI_CONTA, FN_XP_ALTERA_CONTA} from '../../support/elements/Elements.js';

import data from '../../support/data/data.js';

import {} from '../../support/commandConta';


describe('Realiza fluxo funcional', () => {
    before(()=>{    
        cy.login(data.login.usuario, data.login.senha)        
     
    })//before que será executado apenas uma vez

    beforeEach(()=>{
        cy.get(MENU_INICIAL).click();
        cy.resetApp(); 
    }) //before que será executado antes de cada it

    it('Inserir conta', ()=> {
        cy.acessoMenuConta();
        cy.adicionaConta(data.conta.nome);      
        cy.get(MESSAGE).should('contain',data.conta.mensagem_cadastro);            

    })//it add conta com sucesso

    it('Alterando conta', ()=>{
        cy.acessoMenuConta();
        cy.xpath(FN_XP_BTN_ALTERAR_CONTA(data.conta.alteracao)).click()
        cy.get(NOME_CONTA).clear();
        cy.adicionaConta(data.conta.novo_nome);  
        cy.get(MESSAGE).should('contain',data.conta.mensagem_alteracao);  

    }) //it alterar conta

    it('Inserir conta com nome repetido', ()=>{
        cy.acessoMenuConta();
        cy.adicionaConta(data.conta.mesmo_nome);
        cy.get(MESSAGE).should('contain', data.conta.mensagem_erro);
    })// it conta com nome repetido

    it('Deve criar uma movimentação', ()=>{
        cy.get(MENU_MOVIMENTACAO).click();
        cy.get(DESCRICAO_MOVIMENTACAO).type(data.movimentacao.descricao);
        cy.get(VALOR_MOVIMENTACAO).type(data.movimentacao.valor);
        cy.get(INTERESSADO_MOVIMENTACAO).type(data.movimentacao.interessado);
        cy.get(STATUS_MOVIMENTACAO).click();
        cy.get(CONTA_MOVIMENTACAO).select(data.movimentacao.conta);
        cy.get(BTN_ADD_MOVIMENTACAO).click();
        cy.get(MESSAGE).should('contain', data.conta.mensagem_sucesso);
        cy.get(LINHAS_MOVIMENTACAO).should('have.length', 7); //aqui como eu tenho controle da massa de dados, eu sei que toda inserção deverá ter uma listagem com 7 registros.
        cy.xpath(FN_XP_BUSCA_ELEMENTO(data.movimentacao.descricao,data.movimentacao.valor)).should('exist');
    })//it criar movimentação

    it.only('Consulta extrato', ()=>{
        cy.get(MENU_INICIAL).click();
        cy.xpath(FN_XP_SALDO_CONTA(data.extrato.conta)).should('contain', '534');

        cy.get(MENU_EXTRATO).click();
        cy.xpath(FN_XP_ALTERA_CONTA(data.extrato.alteracao)).click();
        //cy.wait(1000); não é ideial deixar com um tempo fixo, precisa ter um sincronismo mais inteligente

        cy.get(DESCRICAO_MOVIMENTACAO).should('have.value', data.extrato.alteracao);
        cy.get(STATUS_MOVIMENTACAO).click();
        cy.get(BTN_ADD_MOVIMENTACAO).click();
        cy.get(MESSAGE).should('contain', 'sucesso');

        cy.get(MENU_INICIAL).click();
        cy.xpath(FN_XP_SALDO_CONTA(data.extrato.conta)).should('contain', '4.034,00');

    })//consulta extrato

    it('Exclui movimentação', ()=>{
        cy.get(MENU_EXTRATO).click();
        cy.xpath(FN_XP_EXCLUI_CONTA(data.extrato.exclusao)).click();
        cy.get(MESSAGE).should('contain', data.conta.mensagem_sucesso);

    })//exclui movimentação

})//describe teste funcional


