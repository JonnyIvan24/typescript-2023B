function mayorDeEdad(edad:number) {
    const message : string = edad > 17 ? 'es mayor de edad' : 'es menor de edad' 
    console.log(message)
}

mayorDeEdad(10)
mayorDeEdad(18)


/**
 * hay que evitar bloques innecesarios, por ejemplo, else
 * ya que al ser un bloque por defecto podemos declarar código antes o después
 * que al final de cuentas siempre se va ejecutar
 */

const edad: number = 10

let message = 'es menor de edad'
    
if (edad > 17) {
    message = 'es mayor de edad'
    //
}
    
// if (edad > 17) {
//     message = 'es mayor de edad'
//     //
// } else {
//     message = 'es menor de edad'
//     //
// }
