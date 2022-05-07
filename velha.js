var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var corLinhaVencedora = '#0f0';
var temaDark = false;

mudarJogador('X');

function escolherQuadrado(id) {
    console.log("Clickou no botão!");
    console.log(id);

    if(vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checkaVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkaVencedor() {
    var quadrado1 = document.getElementById('1');
    var quadrado2 = document.getElementById('2');
    var quadrado3 = document.getElementById('3');
    var quadrado4 = document.getElementById('4');
    var quadrado5 = document.getElementById('5');
    var quadrado6 = document.getElementById('6');
    var quadrado7 = document.getElementById('7');
    var quadrado8 = document.getElementById('8');
    var quadrado9 = document.getElementById('9');

    if(checkaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checkaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checkaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checkaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checkaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checkaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checkaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checkaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {    
    quadrado1.style.backgroundColor = corLinhaVencedora;
    quadrado2.style.backgroundColor = corLinhaVencedora;
    quadrado3.style.backgroundColor = corLinhaVencedora;
}

function checkaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false;
    
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.innerHTML = '';
        quadrado.style.backgroundColor = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    for(var i = 0; i < quadrados.length; i++) {

    }

    mudarJogador('X');
}

function modoDark() {
    temaDark = !temaDark;
    corLinhaVencedora = temaDark ? '#090' : '#0f0';
    document.getElementsByTagName('body')[0].classList.toggle('modo-dark');
    
    let botaoReiniciar = document.getElementsByTagName('button')[0];
    botaoReiniciar.setAttribute('class', temaDark ? 'btn btn-info' : 'btn btn-primary');

    let botaoModo = document.getElementsByTagName('button')[1];
    botaoModo.setAttribute('class', temaDark ? 'btn btn-light' : 'btn btn-dark');
    botaoModo.innerHTML = temaDark ? 'Modo Light' : 'Modo Dark';

    checkaVencedor();
}