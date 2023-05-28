document.addEventListener( "DOMContentLoaded",()=>{
  
 const form = document.querySelector('.form');
  const input = document.querySelector('.inputNum')
  const container = document.querySelector('.container')
  let dolar = document.querySelector('.inputDolar')
  let inputNumber;
  let inputDolar;
  
  
  dolar.addEventListener('change',(e)=>{
    inputDolar = e.target.value;
  })
  input.addEventListener('change',(e)=>{
    inputNumber = e.target.value
  })
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    container.textContent = inputNumber && inputDolar ? inputNumber > inputDolar*10 ? `El precio final es: $ ${(inputNumber * 1.53)}. Cuando el valor base del juego supera los 10 dolares el impuesto a sumarle es del 53%.` : `El precio final es: $ ${(inputNumber * 1.74)}. Cuando el valor base del juego no supera los 10 dolares el impuesto a sumarle es de 74%.` : 'ingresa ambos campos';
  })
})