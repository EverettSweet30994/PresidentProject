let nixon = 0
let govern = 0


nixonBox.onclick = function() {
    nixon += 1
    console.log(nixon)
    console.log(govern)
}

governBox.onclick = function() {
    nixon += 10
    govern -= 1
    console.log(nixon)
    console.log(govern)
    window.location.href = "govener.html"
}

body.onmousemove = function() {
    nixon += 1
}

nixonImage.onmouseover = function sound() {
    let audio = new Audio('SF-asterisk.mp3');
    audio.play()
}

nixonImage.onmouseleave = function sound() {
    let audio = new Audio('SF-asterisk.mp3');
    audio.play()
}