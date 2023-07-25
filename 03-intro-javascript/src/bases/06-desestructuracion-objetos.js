/* DESESTRUCTURACIÓN DE OBJETOS */

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado"
}

// Destructurar el objeto para acceder a sus propiedades individuales.
/*  La siguiente línea se leería así:
 * Extrae el valor "nombre" de la variable-objeto "persona" 
*/
/* const { nombre, edad, clave } = persona */
/* const { nombre: nombre2 } = persona */

/* console.log(nombre);
console.log(edad);
console.log(clave); */

const usecontext = ({ clave, nombre, edad, rango = "Capitán" }) => {
  /*   console.log(nombre, edad, rango); */

  return {
    nombreClave: clave,
    anos: edad,
    coordenadas: {
      latitud: 14.1658,
      longitud: 12.65468
    }
  }
}

const { nombreClave, anos, coordenadas: { latitud, longitud } } = usecontext(persona)

/* const { nombreClave, anos, coordenadas } = usecontext(persona)
const { latitud, longitud } = coordenadas */

console.log(nombreClave, anos);
console.log(latitud, longitud);