var Content= 'Tradição de Minas';
var text = document.getElementById('text');

var speed = 190;
var cont = 0;

function typeWriter (){
  if (cont < Content.length){ text.textContent += Content.charAt(cont); cont++;
  setTimeout(typeWriter, speed);
  }else{
    text.textContent = '';
    cont = 0;
    typeWriter();
  }  
  }
typeWriter();