let empDetails = {
    name: "John",
    age: 12,
    address: {
        city: "xyz",
        pincode: 123456,
    }
}

// This whole thing is a JSON
let empStr = JSON.stringify(empDetails)
console.log(empStr)

let myObj = JSON.parse(empStr)
console.log(myObj)