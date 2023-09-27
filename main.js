'use strict'

let iniciar = document.getElementById('btnLight');
let casas = document.querySelectorAll('.casa');
let jogar = document.getElementById('jogar');
let container = document.querySelectorAll('.container');
let principal = document.querySelectorAll('.principal');
let jogadores = document.querySelectorAll('.jogadores');
let jogadoratual = document.getElementById('jogador-atual');
let jogador1 = "";
let jogador2 = "";
let jogoEmAndamento=true; 
let vez=0; 
let verifica;
let vencedor = "";
let msgFinal = document.getElementById('msg-final');

let posicao=[
    ["","",""],
    ["","",""],
    ["","",""],
]; 

let tabuleiro=[
    [document.getElementById('esp1'),document.getElementById('esp2'),document.getElementById('esp3')],
    [document.getElementById('esp4'),document.getElementById('esp5'),document.getElementById('esp6')],
    [document.getElementById('esp7'),document.getElementById('esp8'),document.getElementById('esp9')],
]; 

iniciar.addEventListener('click', ()=>{
    iniciar.classList.toggle('dark');
    casas.forEach(casa => casa.classList.toggle('dark'));
});

jogar.addEventListener('click', ()=> {
    jogador1 = document.getElementById('f-name').value;
    jogador2 = document.getElementById('s-name').value;

    if(jogador1==="" || jogador2===""){
        alert("Oops! Ainda não sei seus nomes 😔");
    }else{
        jogar.classList.toggle('show');
        container.forEach(container => container.classList.toggle('show'));
        principal.forEach(principal => principal.classList.toggle('show'));
        jogadores.forEach(jogadores => jogadores.classList.toggle('show'));

        jogadoratual.innerHTML = `JOGADOR<br> DA<br> VEZ: <br><br><span>${vez === 0 ? jogador1 : jogador2}</span>`;
    }
});

let janelaModal = document.querySelector('.janela');
let modal = document.querySelector('.modal');
let btnFim = document.querySelector('.btn-fim');
//msgFinal

function fim(){
    jogoEmAndamento = false;
    container.forEach(container => container.classList.toggle('fim'));
    janelaModal.classList.toggle('fim');
    modal.classList.toggle('fim');
    btnFim.classList.toggle('fim');
    jogadoratual.classList.toggle('fim');
}

function preencher(p){
    if((jogoEmAndamento)){
        if(vez===0){
            switch(p){
                case 1:
                    if(posicao[0][0]===""){
                        posicao[0][0]="X";
                        vez=1;
                    }
                    break;
                case 2:
                    if(posicao[0][1]===""){
                        posicao[0][1]="X";
                        vez=1;
                    }
                    break;
                case 3:
                    if(posicao[0][2]===""){
                        posicao[0][2]="X"; 
                        vez=1;
                    }
                    break;
                case 4:
                    if(posicao[1][0]===""){
                        posicao[1][0]="X";
                        vez=1;
                    }
                    break;
                case 5:
                    if(posicao[1][1]===""){
                        posicao[1][1]="X";
                        vez=1;
                    }
                    break;
                case 6:
                    if(posicao[1][2]===""){ 
                        posicao[1][2]="X";
                        vez=1;
                    }
                    break;
                case 7:
                    if(posicao[2][0]===""){
                        posicao[2][0]="X";
                        vez=1;
                    }
                    break;
                case 8:
                    if(posicao[2][1]===""){
                        posicao[2][1]="X";
                        vez=1;
                    }
                    break;
                case 9:
                    if(posicao[2][2]===""){
                        posicao[2][2]="X";
                        vez=1;
                    }
                    break;
            }
            winner();
        }else if(vez===1){
            switch(p){
                case 1:
                    if(posicao[0][0]===""){
                        posicao[0][0]="O";
                        vez=0;
                    }
                    break;
                case 2:
                    if(posicao[0][1]===""){
                        posicao[0][1]="O";
                        vez=0;
                    }
                    break;
                case 3:
                    if(posicao[0][2]===""){
                        posicao[0][2]="O";
                        vez=0;
                    }
                    break;
                case 4:
                    if(posicao[1][0]===""){
                        posicao[1][0]="O";
                        vez=0;
                    }
                    break;
                case 5:
                    if(posicao[1][1]===""){
                        posicao[1][1]="O";
                        vez=0;
                    }
                    break;
                case 6:
                    if(posicao[1][2]===""){
                        posicao[1][2]="O";
                        vez=0;
                    }
                    break;
                case 7:
                    if(posicao[2][0]===""){
                        posicao[2][0]="O";
                        vez=0;
                    }
                    break;
                case 8:
                    if(posicao[2][1]===""){
                        posicao[2][1]="O";
                        vez=0;
                    }
                    break;
                case 9:
                    if(posicao[2][2]===""){
                        posicao[2][2]="O";
                        vez=0;
                    }
                    break;
            }
            winner();   
        }
    }
};

function atualiza(){
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            if(posicao[i][j]==="X"){
                tabuleiro[i][j].innerHTML="X";
                tabuleiro[i][j].style.cursor = "default";
            }else if(posicao[i][j]==="O"){
                tabuleiro[i][j].innerHTML="O";
                tabuleiro[i][j].style.cursor = "default";
            }else{
                tabuleiro[i][j].innerHTML="";
                tabuleiro[i][j].style.cursor = "pointer";
            }
        }
    }
};

function ganhou(){
    let x=0;
    while(x<3){
        if((posicao[x][0]===posicao[x][1])&&(posicao[x][0]===posicao[x][2])){
            return posicao[x][0];
        }
        if((posicao[0][x]===posicao[1][x])&&(posicao[0][x]===posicao[2][x])){
            return posicao[0][x];
        }
        x++;
    };

    if((posicao[0][0]===posicao[1][1])&&(posicao[1][1]===posicao[2][2])){
        return posicao[0][0];
    }else if((posicao[0][2]===posicao[1][1])&&(posicao[1][1]===posicao[2][0])){
        return posicao[0][2];
    }
    return "";
};

function reiniciar(){   
    janelaModal.classList.remove('fim');
    modal.classList.remove('fim');
    btnFim.classList.remove('fim');

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            posicao[i][j] = "";
        }
    }
    atualiza();
    vencedor = "";
    jogoEmAndamento = true;
    vez = 0;
    jogadoratual.innerHTML = `JOGADOR<br> DA<br> VEZ: <br><br><span>${vez === 0 ? jogador1 : jogador2}</span>`;

    jogadoratual.classList.remove('fim');
};

function newplayers(){
    
    jogar.classList.remove('show');
    container.forEach(container => container.classList.remove('show'));
    principal.forEach(principal => principal.classList.remove('show'));
    jogadores.forEach(jogadores => jogadores.classList.remove('show'));

    document.getElementById('f-name').value = '';
    document.getElementById('s-name').value = '';
    reiniciar();

};   

function winner(){
    atualiza();
    verifica = ganhou();
    if(verifica!=""){
        vencedor = verifica === "X" ? jogador1 : jogador2;
        msgFinal.innerHTML = `VENCEDOR<br> ${vencedor}! <br> 🤩🎉🏅`;
        fim();
        return;
    }else{
        let vazio=0;
        for(var i=0; i<3; i++){
            for(var j=0; j<3; j++){
                if(posicao[i][j]==""){
                    vazio = 1;
                }
            }
        }
        if(vazio==0){
            msgFinal.innerHTML = `EMPATE 🤝`;
            fim();
        }
    }
    jogadoratual.innerHTML = `JOGADOR<br> DA<br> VEZ: <br><br><span>${vez === 0 ? jogador1 : jogador2}</span>`;
}