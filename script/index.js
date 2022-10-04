
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
    try {
    cambiarSimbolo();
    console.log(x);
    let arraytoString = x.join("");
    let  resultado = eval(arraytoString);
    texto.innerHTML= resultado;
     console.log(resultado);
    } catch (error) {
        texto.innerHTML=" Syntax error";
    }
} 
    
   
function cambiarSimbolo() {
    if(x.includes('Sin(')){
        let indice= x.findIndex(i => i=== 'Sin(');
        x[indice]= "Math.sin(";
    }else if(x.includes('Log(')){
        let indice= x.findIndex(i => i=== 'Log(');
        x[indice]= 'Math.log(';
    }else if(x.includes('Cos(')){
        let indice= x.findIndex(i => i=== 'Cos(');
        x[indice]= "Math.cos(";
    }else if(x.includes('Tg')){
        let indice= x.findIndex(i => i=== 'Tg');
        x[indice]= "Math.tan(";
    } else if(x.includes('√(')){
        let indice= x.findIndex(i => i=== '√(');
        x[indice]= "Math.sqrt(";
    } else if(x.includes('3√(')){
        let indice= x.findIndex(i => i=== '3√(');
        x[indice]= "Math.cbrt(";
    } else if(x.includes('In(')){
        let indice= x.findIndex(i => i=== 'In(');
        x[indice]= 'Math.log2(' ; 

    }else if(x.includes('x2')){
        let indice= x.findIndex(i => i=== 'x2');
        x[indice]= '*2' ; 
    }
   
}
 

function borrarTodo(){ 
    let texto= document.getElementById('text');
   texto.innerHTML= x.slice(x.length);
   x= [];
 
}
function borrar(){ 
    let texto= document.getElementById('text');
    x.length = x.length-1;
    texto.innerHTML=  x.join("") ;
    console.log(x);
 
}