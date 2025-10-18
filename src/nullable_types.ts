function greeting(name : string | null | undefined = "") : string {
    if (name)
        return `Hello ${name.toUpperCase()}!`
    return "Hello there. How are you doing!"
}

console.log(greeting("peter"))
console.log(greeting(null));
console.log(greeting(undefined));
console.log(greeting());