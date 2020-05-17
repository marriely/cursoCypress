/// <reference types='cypress' />

describe('work with basic element', () => {
    before(() => { //beforeEach é antes de cada it
        cy.visit('http://wcaquino.me/cypress/componentes.html')

    })//hooks que faz antes do teste geral

    beforeEach(() =>{
        cy.reload()
    }) //antes de cada um teste

    it('Usando jquery', ()=>{

        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]') //aqui foi como cypress sugeriu

        cy.get('table#tabelaUsuarios tbody>tr:eq(0) td:nth-child(3) >input') 
        //aqui eu especifiquei que queria o primeiro tr e depois o 3 td
            .click()
        cy.get('[onclick*=\'Francisco\']')//precisa usar \(caracter de skip)
        cy.get("[onclick*='Francisco\']")// ou preciso deixar tudo dentro de ""
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~ td:eq(3) > input') //aqui estou pegundo o irmao pelo ~, primeiro localizei o elemento, e depois fui pelo irmao dele
        //toda essa busca pq esse campo naõ tem algo especifico para o teste
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) > input').type('foi') //aqui vou na linha tr, ai naveguei pelos filhos dela.
        
    })

    it('usando xpath', ()=>{
        cy.xpath('//input[contains(@onclick,\'Francisco\')]') 
        // o //input faz ir direto para o um input ai dentro de [] eu coloco as "regras" para filtrar mais o elemento
        cy.xpath('//table[@id=\'tabelaUsuarios\']//td[contains(.,\'Francisco\')]/following-sibling::td/input')
        //eu inicio o xpath com //no exemplo acima eu peguei uma table com id 'tabelaUsuario', quando eu colo o [] na frente do elemento eu irei
        //especificar mais detalhes do elemento
        // o .. eu estou subindo o nivel e depois dou um //e vou para outro elemento
        //.. sobe um nivel, quando uso o @ é a propriedade, exemplo @id
        cy.xpath("//td[contains(.,'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]/..//input[@type='text']").type('funciona')
        //quando eu coloco dentro do "" é bom para quando tem espaço
        //td[contains(.,'Mestrado') é quando eu falo q em qualquer lugar ., vai ter o nome 'Mestrado'
        // quando eu só coloco uma /eu estou separando aquela parte do elemento
    })

})//describe