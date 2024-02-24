/**
 * ts no permite parámetros opcionales y por defecto al mismo tiempo
 * ejemplo: b?: number =  3 
 */
const myFunction = (a: number, b: number = 3): number => {
    return a + b
}

console.log(myFunction(2))
