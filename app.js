document.addEventListener( "DOMContentLoaded",()=>{
  
 const form = document.querySelector('.form');
  const input = document.querySelector('.inputNum')
  const dolar = document.querySelector('.inputDolar')
  const container = document.querySelector('.container')
  let inputNumber;
  let inputDolar;
  
  function redondearDecimales(numero, decimales) {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');
    if (numeroRegexp.test(numero)) {         
      return Number(numero.toFixed(decimales));
    } else {
        return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;
    }
}

  dolar.addEventListener('change',(e)=>{
    inputDolar = e.target.value;
  })
  input.addEventListener('change',(e)=>{
    inputNumber = e.target.value
  })
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    container.textContent = inputNumber && inputDolar ? inputNumber > inputDolar*10 ? `El precio aproximado final es: $ ${redondearDecimales(inputNumber * 1.53,2)}. Cuando el valor base del juego supera los 10 dolares el impuesto a sumarle es del 53%.` : `El precio aproximado final es: $ ${redondearDecimales(inputNumber * 1.74,2)}. Cuando el valor base del juego no supera los 10 dolares el impuesto a sumarle es de 74%.` : 'Completa ambos campos';
  })
})