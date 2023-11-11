const ligar = document.getElementById('lig')
const desligar = document.getElementById('desl')
const lamp = document.getElementById('lamp')
const img = document.getElementsByTagName('img')

ligar.addEventListener('click', function(){
    lamp.src= "ligada.jpg"
}
)

desligar.addEventListener('click', function(){
    lamp.src= "desligada.jpg"
}
)
