function calcularBonoNavideno(antiguedad, sueldo) {
    let bono = 0;
    
    if (antiguedad > 4 || sueldo < 2000) {
      bono = sueldo * 0.25;
    } else {
      bono = sueldo * 0.20;
    }
    
    return bono;
  }
  
  const antiguedadEmpleado = parseInt(prompt("Ingrese la antigüedad del empleado en años:"));
  const sueldoEmpleado = parseFloat(prompt("Ingrese el sueldo del empleado en pesos:"));
  
  const bonoNavideno = calcularBonoNavideno(antiguedadEmpleado, sueldoEmpleado);
  console.log(`El empleado recibirá un bono navideño de ${bonoNavideno} pesos.`);