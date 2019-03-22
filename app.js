
// input.value = 1 + Number(input.value);
// input.value++;
//input.value = ++input.value;

// INCREMENTA
//var botaoIncrementa = document.querySelector('.btn-incrementa');
var botoesIncrementa = document.querySelectorAll('.btn-incrementa');
//console.log(botoesIncrementa);

// iteira sobre cada botão que possua a classe '.btn-decrementa' e adiciona funcionalidade de incrementa
for(let botao of botoesIncrementa){
	botao.addEventListener('click', incrementa);	

	function incrementa(){
		var item = botao.closest('.item');
		var input = item.querySelector('.quantidade');
		input.value++;

		var preco = recuperaItemERetornaOPreco(item);

		adicionaPrecoDoItemAoTotal(preco);
	}
}


// DECREMENTA
var botoesDecrementa = document.querySelectorAll('.btn-decrementa');

// iteira sobre cada botão que possua a classe '.btn-decrementa' e adiciona funcionalidade de decrementa
for (let botao of botoesDecrementa) {
	botao.addEventListener('click', decrementa);


	function decrementa(){
		var item = botao.closest('.item');
		var input = item.querySelector('.quantidade');

		if(input.value > 0){
			input.value--;

			var preco = recuperaItemERetornaOPreco(item);
			adicionaPrecoDoItemAoTotal(-preco);
		} else{
			console.log(input.value);
		}
	}	
}

function recuperaItemERetornaOPreco(item){
	var precoItem = item.querySelector('.preco-item');
	return Number(precoItem.textContent);
}

function adicionaPrecoDoItemAoTotal(valor){
	var total = document.querySelector('#total');
	total.textContent = valor + Number(total.textContent);
}


/* Validação 

criação de função anonima que percorre todos os elementos do formulario em busca
de elementos com alguma valor ou seja, caso exista valores isto se corresponderá 
a pedidos feitos.
*/
var formPedido = document.forms.pedido;
formPedido.addEventListener('submit', function(event){
	var contador = 0;
	var inputs = formPedido.querySelectorAll('input.quantidade');

	for (let input of inputs) {
		if(input.value > 0){
			contador++;
		}
	}

	if(contador == 0){
		alert('Deve existir pelo menos 1 pizza no pedido');
		event.preventDefault(); // atraves do evento e realizado um encerramento da submissão ao servidor
	}


});



























