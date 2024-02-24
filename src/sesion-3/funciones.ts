const myFunction = (a: number, b?: number) => {
    if (typeof b === 'undefined') {
        return a
    }
    return a + b
}

console.log(myFunction(2, 3))