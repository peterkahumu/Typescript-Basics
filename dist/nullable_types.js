function greeting(name = "") {
    if (name)
        return `Hello ${name.toUpperCase()}!`;
    return "Hello there. How are you doing!";
}
console.log(greeting("peter"));
console.log(greeting(null));
console.log(greeting(undefined));
console.log(greeting());
export {};
//# sourceMappingURL=nullable_types.js.map