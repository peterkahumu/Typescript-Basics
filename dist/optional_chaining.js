function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear());
export {};
//# sourceMappingURL=optional_chaining.js.map