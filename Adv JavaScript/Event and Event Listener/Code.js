// binding button

function changeColor() {
    alert("Hello")
}

function changeText() {
    let Text = document.getElementById("headerText")
    Text.style.color = "blue"
}

function changeColorAfter() {
    let Text = document.getElementById("headerText")
    Text.style.color = "black"
}

let HD = document.getElementById("someText")
let hd = document.getElementById("someChange")

HD.addEventListener('change', function changeTextOfHeader() {
    hd.innerText = HD.value
})