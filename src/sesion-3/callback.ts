const myCallback = function (text: string, age: number = 2): void {
    console.log('myCallback is called with ' + text)
}

const myCallback2 = function (text: boolean): void {
    console.log('myCallback is called with' + text)
}

const myCallback3 = function (text: string, age: number): void {
    console.log('myCallback is called with ' + text)
}

/**
 * en el tipado de callbacks no podemos inicializar parámetros
 * a su vez solo es necesario indcarlos como opcionales '?'
 */
function withCallbackArg(mssg: string, myCallback: (text: string, age?: number ) => void): void {
    console.log('withCallbackArg called, message: ' + mssg)
    //
    myCallback(mssg + ' from withCallbackArg')
}

withCallbackArg('hola', myCallback)
