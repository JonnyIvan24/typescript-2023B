function checkNullish(a: number | undefined | null) {
    const text: number | boolean = a ?? false
    console.log(text, a)
}

checkNullish(undefined)
