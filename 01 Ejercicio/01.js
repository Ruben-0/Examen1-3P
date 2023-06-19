// const primo=(num)=>{
//     if(num<2){
//         return false
//     }
//     for(let i=2;i<num; i++){
//         if(num % i ===0){
//             return false;
//         }
//     }
//     return true;
// }
// const mostrar = (numero)=>{
//     resultado = []
//     for(let i = 2; i<numero;i++){
//         if(primo(i))resultado.push(i)
//     }
//     return resultado
// }
// mostrar(100)
function esPrimo(numero){
    if(numero ===2){
        return true;
    }else if(numero<2){
        return false;
    }
    for(var i = 2; i<numero; i++){
        if(numero % i === 0){
            return false;
        }
    }
    return true;
}
const antiguedadEmpleado = parseInt(prompt("Ingrese la antigüedad del empleado en años:"));
  const sueldoEmpleado = parseFloat(prompt("Ingrese el sueldo del empleado en pesos:"));
  
  const bonoNavideno = calcularBonoNavideno(antiguedadEmpleado, sueldoEmpleado);
  console.log(`El empleado recibirá un bono navideño de ${bonoNavideno} pesos.`);