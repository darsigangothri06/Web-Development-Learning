setInterval(function test() {
    let currentDate = new Date()
    document.querySelector('#bdy').innerHTML = currentDate
}, 1000)