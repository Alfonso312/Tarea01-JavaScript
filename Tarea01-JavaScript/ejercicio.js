function compararNumeros() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
  
    var resultado;
  
    if (numero1 > numero2) {
      resultado = numero1 + " es mayor que " + numero2;
    } else if (numero2 > numero1) {
      resultado = numero2 + " es mayor que " + numero1;
    } else {
      resultado = "Ambos números son iguales";
    }
  
    alert(resultado);
  }
  
  function verificarDivisibilidad() {
    var numero = parseInt(document.getElementById("numero").value);
  
    var esDivisible = numero % 2 === 0;
  
    var resultado = numero + (esDivisible ? " es divisible entre 2" : " no es divisible entre 2");
  
    alert(resultado);
  }
  