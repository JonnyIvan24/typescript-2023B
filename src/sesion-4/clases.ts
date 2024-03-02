class SimpleClass {
    id: number
    name: string

    constructor(name: string) {
        this.id = 1
        this.name = name
    }

    print() {
        console.log('simpleClass.id = ' + this.id)
    }
}

let simpleClass = new SimpleClass('juan')

simpleClass.print()
