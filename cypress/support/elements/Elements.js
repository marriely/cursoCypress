
//Elementos para realizar login
export const EMAIL = '[data-test="email"]';
export const SENHA = '[data-test="passwd"]';
export const BTN_ENTRAR = '.btn';
export const MENU_RESETAR = '[href="/reset"]';

//Elementos para adicionar conta
export const MENU_SETTINGS = '[data-test="menu-settings"]'; 
export const MENU_CONTAS = '[href="/contas"]';
export const NOME_CONTA = '[data-test=nome]';
export const BTN_ADD_CONTA = '.btn';

//Elementos para alterar conta
export const XP_BTN_ALTERAR_CONTA = "//table//td[contains(., 'mercado')]/..//i[@class='far fa-edit']";

//Elementos para validação de mensagem
export const MESSAGE = '.toast';

//Elementos para movimentação
export const MENU_MOVIMENTACAO = '[data-test=menu-movimentacao]';
export const DESCRICAO_MOVIMENTACAO = '[data-test=descricao]';
export const VALOR_MOVIMENTACAO = '[data-test=valor]';
export const INTERESSADO_MOVIMENTACAO = '[data-test=envolvido]';
export const BTN_ADD_MOVIMENTACAO = '.btn-primary';
export const LINHAS_MOVIMENTACAO = '.list-group >';
export const XP_BUSCA_ELEMENTO = "//span[contains(.,'Teste 1')]/following-sibling::small[contains(.,'50')]";
export const STATUS_MOVIMENTACAO = '[data-test=status]';

//Elementos para consulta extrato
export const MENU_INICIAL = '[data-test=menu-home]';
export const FN_XP_SALDO_CONTA = `//td[contains(.,'${nome}')]/../td[2]`; 
//coloquei o xpath entre ``para poder chamar a variavel no meio
//vou criar uma função e passar o paramento o nome que eu sempre vou querer buscar





