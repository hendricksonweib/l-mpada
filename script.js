const ligar = document.getElementById('lig')
const lamp = document.getElementById('lamp')
const img = document.getElementsByTagName('img')
const main = document.getElementsByTagName('main')
const body = document.body
const titulo = document.getElementById('titulo')
ligar.addEventListener('click', function(){
    if(lamp.src.endsWith("desligada.jpg")){
       lamp.src="ligada.jpg"
       ligar.innerText ='Desligar'
       body.style.backgroundColor = 'black'
       titulo.style.color = 'white'
    }else{
        lamp.src= "desligada.jpg"
        ligar.innerText ='Ligar'
        body.style.backgroundColor = 'white'
        titulo.style.color = 'black'
    }
})

