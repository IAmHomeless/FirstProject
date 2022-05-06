var boton = document.getElementById("carpincho");
boton.addEventListener("click", randomNumber);
var min;
var max;
min = prompt ("min");
max = prompt ("max");
var z;
function randomNumber ()
{
  z = Math.floor (Math.random() * (((max - min) + 1) - 1));    
  console.log(parseInt(z));
}
