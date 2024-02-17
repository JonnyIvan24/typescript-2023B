/**
 * si utilizamos la palabra reservada var el ámbito sigue siendo el mismo (global)
 * con let el ambito solo es el del bloque en el que se declara
 */

let index: number = 0

if (index === 0) {
    let index: number = 2
    console.log(`index: ${index}`)

}

console.log(`index: ${index}`)

/**
 * si trabajamos con ts en crudo, posiblemente coincidamos con nombre de varibales reservadas por TS
 * pera evitar esto podemos agregar la siguient configuración
 * "moduleDetection": "force"
 * o agregando export {} al inicio del archivo
 * o simplemente cambiando el nombre de la variable
 */

// let name = 'juan'
