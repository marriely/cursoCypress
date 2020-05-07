/// <reference types="cypress" />

it('Equality', () => {
    const a = 1;

    expect(a).equal(1);
    expect(a, "Deveria ser 1").equal(1);
    expect(a).to.be.equal(1); // mais legivel
    // expect('a').to.be.equal('b');
    expect('a').not.to.be.equal('b');
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(b).to.be.null;
    expect(a).not.to.be.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a:1,
        b:2
    }
    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj);
    expect(obj).to.be.eq(obj);
    //expect(obj).to.be.eq({a:1, b:2}) // assim não funciona, precisa ter o deep, pois é um objeto e ele precisa comparar as propriedades
    expect(obj).to.be.deep.eq({a:1, b:2});
    expect(obj).eql({a:1,b:2});
    expect(obj).include({a:1});
    expect(obj).to.have.property('b'); //estou verificando se esse objeto tem a propriedade b
    expect(obj).to.have.property('b', 2); // a propriedade b tem o valor 2
    expect(obj).to.not.be.empty // ve se o objeto está vazio
})

it('Array', ()=> {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3]); // se tem os membros
    expect(arr).to.include.members([1,3]); // se tem parte do membros
    expect(arr).to.not.be.empty; // se não é vazio
    expect([]).to.be.empty;
})

it('Types', () => {
    const num = 1;
    const str = 'String';

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');
    expect([]).to.be.an('array');
})

it ('String', ()=> {
    const str = 'String de teste';

    expect(str).to.be.equal('String de teste') //comparando que a string é igual o que eu defini
    expect(str).to.have.length(15); //string tem o tam 15
    expect(str).to.contains('de');  //compara se tem parte do texto na string
    // regex
    expect(str).to.match(/de/); // se tem o de na string, se o de combina com algo da string
    expect(str).to.match(/^Str/); // se começa com Str o ^ indica q começa
    expect(str).to.match(/teste$/); // se termina com teste o $ indica q o texto informado deve estar no final
    expect(str).to.match(/.{15}/); // o . aceita qualquer coisa, aqui com o {15} eu quero ver se ele tem o tam de 15
    expect(str).to.match(/\w+/); // tem letras
    expect(str).to.match(/\D+/)
})

it('Numbers', () => {
    const number = 4;
    const floatNumber = 5.2123;

    expect(number).to.be.equal(4);
    expect(number).to.be.above(3); //faz o teste q seja acima de 3
    expect(number).to.be.below(7); // faz o teste q seja abaixo de 7
    expect(floatNumber).to.be.equal(5.2123);
    expect(floatNumber).to.be.closeTo(5.2,0.1); // comparo se o arredandamento é com 0.1
    expect(floatNumber).to.be.above(5);


})

