'use strict'

let botao = document.getElementById('btnLight');
let casas = document.querySelectorAll('.casa');

//Evento para alterar entre modo escuro/claro
botao.addEventListener('click', ()=>{
    botao.classList.toggle('dark');
    casas.forEach(casa => casa.classList.toggle('dark'));
})

//Mostrar tabuleiro

let jogar = document.getElementById('jogar');
let container = document.querySelectorAll('.container');
let principal = document.querySelectorAll('.principal');
let jogadores = document.querySelectorAll('.jogadores');

jogar.addEventListener('click', ()=> {
    let jogador1 = document.getElementById('f-name').value;
    let jogador2 = document.getElementById('s-name').value;

    //Só deve aparecer se o usuário digitar um nome, caso contrário
    //emitir um alerta digite o nome dos jogadores

    if(jogador1==="" && jogador2===""){
        alert("Oops! Ainda não sei seus nomes 😔");
    }else{
        //Mostra a tela de jogo e esconde a outras divs
        jogar.classList.toggle('show');
        container.forEach(container => container.classList.toggle('show'));
        principal.forEach(principal => principal.classList.toggle('show'));
        jogadores.forEach(jogadores => jogadores.classList.toggle('show'));
    }
})

