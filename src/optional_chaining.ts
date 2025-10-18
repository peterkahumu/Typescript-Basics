type Customer = {
    birthday : Date
}

function getCustomer(id : number) : Customer | null{
    return id===0 ? null : {birthday : new Date()}
}

// Optional property access operator.
let customer = getCustomer(0)
console.log(customer?.birthday?.getFullYear())

// Optional element access operator.
let sellers : string[]= []

console.log(sellers?.[0])
