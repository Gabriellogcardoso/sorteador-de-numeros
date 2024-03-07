function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let numeroInicial = parseInt(document.getElementById("de").value);
    let numeroFinal = parseInt(document.getElementById("ate").value);

    console.log(quantidade);
    console.log(numeroInicial);
    console.log(numeroFinal);

    let listaNumerosSorteados = [];
    let numeroSorteado;

    for(let contador = 0; contador < quantidade; contador++){
        numeroSorteado = geraNumeroAleatorio(numeroInicial, numeroFinal);
        
        while(listaNumerosSorteados.includes(numeroSorteado)){
            numeroSorteado = geraNumeroAleatorio(numeroInicial, numeroFinal);
        }
        listaNumerosSorteados.push(numeroSorteado);
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumerosSorteados}</label>`;
   
    alteraStatusBotao();
}

function alteraStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
      botao.classList.remove('container__botao-desabilitado');
      botao.classList.add('container__botao');
    } else {
      botao.classList.remove('container__botao');
      botao.classList.add('container__botao-desabilitado');
    }   
}  


function geraNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function limpaInputs(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}

function textoInicial(){
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
}

function reiniciar(){
    limpaInputs();
    textoInicial();
    alteraStatusBotao();
}

