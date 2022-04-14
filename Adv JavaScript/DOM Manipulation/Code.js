// getting main section
let mainElement = document.getElementById("main")
console.log(mainElement)
let rightSection = document.getElementById("right")
console.log(rightSection)

// Only to get the innertext
console.log(rightSection.innerHTML)

// fetch all the elements that has class layout
let layoutElement = document.getElementsByClassName("layout")
console.log(layoutElement)
for (let i = 0; i < layoutElement.length; i++)
    console.log(layoutElement[i])

// Element by tag
let tagElement = document.getElementsByTagName("section")
console.log(tagElement)
console.log(tagElement[0].innerHTML)

// Modifying the element
let myLiTags = document.getElementsByTagName("li")
myLiTags[2].innerHTML = "Good Evening"
console.log(myLiTags)

// Changing the fullname
let fullName = document.getElementById("fullName")
console.log(fullName)

// Query Selector
let selectorQuery = document.querySelector('section');
console.log(selectorQuery)

let selectQu = document.querySelector(".layout")
console.log(selectQu)

let selecId = document.querySelector('#main')
console.log(selecId)

let selectUL = document.querySelector("#left ul li")
console.log(selectUL)