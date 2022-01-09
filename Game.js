// Uma variavel para controlar o personagem //
let personagem = document.querySelector('#personagem')

// Uma variavel para controlar o obstaculo //
let obstaculo = document.querySelector('#obstaculo')

// Criando uma função para controlar o pulo do personagem //
function pular() {
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    },500)
}

// Criando a função para verificar se o personagem está colidindo com o obstaculo //
var testarColisao = setInterval(function(){
    var topoPersonagem = parseInt(
         window.getComputedStyle(personagem).getPropertyValue('top')
    )

    var EsquerdaObstaculo = parseInt(
        window.getComputedStyle(obstaculo).getPropertyValue('margin-left')
   )

   if(EsquerdaObstaculo <20 && EsquerdaObstaculo >0 && topoPersonagem >=130){
       obstaculo.style.animation = 'none'
       obstaculo.style.display = 'none'
       alert('Você Perdeu!')
   }

},10)