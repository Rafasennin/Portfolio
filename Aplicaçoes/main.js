
function jumpline(){
    document.write("<br><br>")
  }
  
  
  const soma = document.querySelector(".soma");
  const resultado = document.querySelector(".resultado");
  
  
  soma.addEventListener("click", ()=>{
  
    const altura = document.querySelector(".altura").valueAsNumber;
    const peso = document.querySelector(".peso").valueAsNumber;
    const imc = peso / (altura * altura)
  
   
    resultado.innerText= "Seu resultado: " +  imc;
  
  })
  
  
  
  
  
  