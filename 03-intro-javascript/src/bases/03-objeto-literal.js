/* OBJETOS LITERALES Y OPERADOR DE PROPAGACIÓN  */

const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "Nueva York",
    CP: 5654498,
    latitud: 14.654,
    longitud: -73.202
  }
}

console.table(persona);

const persona2 = {...persona}
persona2.nombre = "Peter"

console.table(persona2);