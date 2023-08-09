
let cuadrado = document.querySelector(".cuadrado");
let cuadrado1 = document.querySelector(".cuadrado1");
let cuadrado2 = document.querySelector(".cuadrado2");
let cuadrado3 = document.querySelector(".cuadrado3");
let cuadrado4 = document.querySelector(".cuadrado4");
let cuadrado5 = document.querySelector(".cuadrado5");
let cuadrado6 = document.querySelector(".cuadrado6");
let cuadrado7 = document.querySelector(".cuadrado7");
let cuadrado8 = document.querySelector(".cuadrado8");
let cuadrado9 = document.querySelector(".cuadrado9");


const copa1 = document.getElementById("copa1");
const copa2 = document.getElementById("copa2");
const copa3 = document.getElementById("copa3");
const copa4 = document.getElementById("copa4");
const copa5 = document.getElementById("copa5");
const copa6 = document.getElementById("copa6");
const copa7 = document.getElementById("copa7");
const copa8 = document.getElementById("copa8");
const copa9 = document.getElementById("copa9");

const straw1 = document.getElementById("straw1");
const straw2 = document.getElementById("straw2");
const straw3 = document.getElementById("straw3");
const straw4 = document.getElementById("straw4");
const straw5 = document.getElementById("straw5");
const straw6 = document.getElementById("straw6");
const straw7 = document.getElementById("straw7");
const straw8 = document.getElementById("straw8");
const straw9 = document.getElementById("straw9");
var turno = 0;
if(turno <= 9){
                cuadrado1.addEventListener('click', ()=> {if(turno %2 == 0){ straw1.style.visibility = "visible";turno++;  console.log(`El turno es if: ${turno}`);}else { copa1.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});


                cuadrado2.addEventListener('click', ()=> {if(turno %2 == 0){ straw2.style.visibility = "visible"; turno++;  console.log(`El turno es if: ${turno}`);}else{copa2.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});



                cuadrado3.addEventListener('click', ()=> {if(turno %2 == 0){ straw3.style.visibility = "visible"; turno++; console.log(`El turno es if: `+ turno );}else { copa3.style.visibility = "visible"; turno++; console.log(`El turno es else: `+ turno );}});



                cuadrado4.addEventListener('click', ()=> {if(turno %2 == 0){straw4.style.visibility = "visible"; turno++;  console.log(`El turno es if: ${turno}`);} else {copa4.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});


                cuadrado5.addEventListener('click', ()=> {if(turno %2 == 0){ straw5.style.visibility = "visible";turno++;  console.log(`El turno es if: ${turno}`);}else { copa5.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});



                cuadrado6.addEventListener('click', ()=> {if(turno %2 == 0){ straw6.style.visibility = "visible"; turno++;  console.log(`El turno es if: ${turno}`);}else{copa6.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});



                cuadrado7.addEventListener('click', ()=> {if(turno %2 == 0){ straw7.style.visibility = "visible"; turno++;  console.log(`El turno es if: ${turno}`);}else { copa7.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});



                cuadrado8.addEventListener('click', ()=> {if(turno %2 == 0){straw8.style.visibility = "visible"; turno++; console.log(`El turno es if: ${turno}`);} else {copa8.style.visibility = "visible"; turno++; console.log(`El turno es else: ${turno}`);}});

        

                cuadrado9.addEventListener('click', ()=> {if(turno %2 == 0){straw9.style.visibility = "visible"; turno++;  console.log(`El turno es if: ${turno}`);} else {copa9.style.visibility = "visible"; turno++;  console.log(`El turno es else: ${turno}`);}});
}else {
        alert("Fin del juego");
}