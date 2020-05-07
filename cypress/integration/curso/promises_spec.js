
it ('sem testes, ainda', () => {})

const getSomething = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            //console.log('respondendo...')
            resolve(13);
        }, 1000)
    })
    

} // metodo 


const system = () => {
    console.log('init');
    const prom = getSomething(); // nao preciso disso, pois nao vou receber um valor
    prom.then(some => {
        console.log(`Something is ${some}`)
    })       
  //  console.log(`Something is ${something}`); //interpolação de variavel é entre ``
    console.log('end');

}

system();