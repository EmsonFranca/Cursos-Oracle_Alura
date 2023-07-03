console.log(`Trabalhando com condicionas`);

//criando listas de cidades
const listaDestinos = new Array(
    'Natal',
    'Messias Targino',
    'Patu',
    'João Pessoa',
    'Pau dos Ferros'
)

const idadeComprador = 17
const estaAcompanhada = true
const temPassagem = true

console.log(`Destinos possíveis:\n`);
console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log(`Boa viagem!!\n`);

    remove() //remove item
} else {
    console.log('Comprador não é maior de idade. Não pode vender a passagem\n');
}

console.log("Embarque: \n\n");
if(temPassagem == true && estaAcompanhada == true){
    console.log(`Pode embarcar! Aproveite sua viajem\n`);
}else {
    console.log("Embarque negado\n");
}

function remove() {
    listaDestinos.splice(1, 1)
}

console.log(listaDestinos);
