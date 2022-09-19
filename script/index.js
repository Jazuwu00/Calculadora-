
let x= [];


function numero(a){
    let texto= document.getElementById('text');
    const text = document.createTextNode(a);
    texto.appendChild(text);
    x.push(a); 
    console.log(x);
       
  }


function igual(){
    let texto= document.getElementById('text');
if((x.includes('-') || x.includes('+') || x.includes('*')|| x.includes('/') ) ){
    let arraytoString = x.join("");
    let  resultado = eval(arraytoString);
    texto.innerHTML= resultado;
     console.log(resultado);
} else {
    texto.innerHTML= "Sigo en trabajando en eso";
}
}
   
     


   

function borrar(){ 
    let texto= document.getElementById('text');
   texto.innerHTML= x.slice(x.length);
   x= [];
 
}