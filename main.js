'use strict'

let botao = document.getElementById('btnLight')
let casas = document.querySelectorAll('.casa')

//Evento para alterar entre modo escuro/claro
botao.addEventListener('click', ()=>{
    botao.classList.toggle('dark')
    casas.forEach(casa => casa.classList.toggle('dark'))
})