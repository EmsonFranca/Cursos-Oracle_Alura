let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordernaraLivrosPorPreco)

function ordernaraLivrosPorPreco (){
   let livrosOrdenador = livros.sort((a,b)=> a.preco - b.preco)
   exibirOsLivrosNaTela(livrosOrdenador)
}