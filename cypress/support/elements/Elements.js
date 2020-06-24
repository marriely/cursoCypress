
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
export const FN_XP_BTN_ALTERAR_CONTA = nome => `//table//td[contains(., '${nome}')]/..//i[@class='far fa-edit']`;

//Elementos para validação de mensagem
export const MESSAGE = '.toast';

//Elementos para movimentação
export const MENU_MOVIMENTACAO = '[data-test=menu-movimentacao]';
export const DESCRICAO_MOVIMENTACAO = '[data-test=descricao]';
export const VALOR_MOVIMENTACAO = '[data-test=valor]';
export const INTERESSADO_MOVIMENTACAO = '[data-test=envolvido]';
export const BTN_ADD_MOVIMENTACAO = '.btn-primary';
export const LINHAS_MOVIMENTACAO = '.list-group >';
export const FN_XP_BUSCA_ELEMENTO = (desc, value) => `//span[contains(.,'${desc}')]/following-sibling::small[contains(.,'${value}')]`;
export const STATUS_MOVIMENTACAO = '[data-test=status]';
export const CONTA_MOVIMENTACAO = '[data-test=conta]';

//Elementos para consulta extrato
export const MENU_INICIAL = '[data-test=menu-home]';
export const FN_XP_SALDO_CONTA = nome => `//td[contains(.,'${nome}')]/../td[2]`; 
//coloquei o xpath entre crase no inicio e no fim ``para poder chamar a variavel no meio (fazer a interpolação)
//vou criar uma função e passar o paramento o nome que eu sempre vou querer buscar





