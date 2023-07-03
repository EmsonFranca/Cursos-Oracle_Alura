console.log(`\nTrabalhando com Loops\n`);

function remove() {

    listaDestinos.splice(1, 1)
}

//criando listas de cidades
const listaDestinos = new Array(

    'Natal',
    'Messias Targino',
    'Patu',
    'João Pessoa',
    'Pau dos Ferros'
)

const idadeComprador = 18
let estaAcompanhada = false
let temPassagem = false
const destino = "Messias Targino"
let contador = 0
let destinoExiste = false
const podeCompra = (idadeComprador >= 18 || estaAcompanhada == true)

console.log(`Destinos possíveis:\n`);
console.log(listaDestinos);

while (contador < 5) {

    // console.log(listaDestinos[contador]);
    if (listaDestinos[contador] == destino) {

        destinoExiste = true
        break;
    }

    contador += 1;

}

console.log(`Destino informado: ${destinoExiste}`);

if(podeCompra && destinoExiste){

    console.log(`\nBoa viajem para ${destino}.\n`);
}
else{

    console.log(`\nNão foi possivel encontra o destino!\n`);
}

for (let i = 0; i < 5; i++) {
   
    if (listaDestinos[i] == destino) {

        destinoExiste = true
    }
}
