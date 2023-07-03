console.log(`Trabalhando com Listas`);

//criando listas de cidades
const listaDestinos = new Array(
    'Natal',
    'Messias Targino',
    'Patu',
    'João Pessoa',
    'Pau dos Ferros'
)

console.log(`Destinos possíveis:`);
console.log(listaDestinos);

listaDestinos.push('Narnia') // adicionando a lista de items
console.log(`Navos destinos possíveis:`);
console.log(listaDestinos);

listaDestinos.splice(1, 2) //remove um elemento da lista por posição
console.log(listaDestinos);

console.log(listaDestinos[1], listaDestinos[0]); // podemos acessar as posições da lista