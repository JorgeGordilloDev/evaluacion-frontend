function encontrarNumeroMasGrande(numeros) {
  if (numeros.length === 0) {
    return "El arreglo está vacío.";
  }

  let numeroMasGrande = numeros[0]; // Suponemos que el primer número es el más grande

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMasGrande) {
      numeroMasGrande = numeros[i]; // Actualizamos el número más grande si encontramos uno mayor
    }
  }

  return numeroMasGrande;
}

// Ejemplo de uso:
const arreglo = [10, 5, 20, 8, 15];
console.log("El número más grande es:", encontrarNumeroMasGrande(arreglo)); // Debería imprimir 20
