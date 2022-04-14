// normal way
function add() {
    return 2 + 3
}
let x = add()
console.log()

const add2 = function() {
    return 2 + 30
}

console.log(add2())

// arrow function
const add3 = () => 800 + 12
console.log(add3())

const sqre = (a) => a * a
console.log(sqre(120))

const sqres = a => a * a // only for single param
console.log(sqres(100))