returnme.onclick = function() {
    window.location.href = "index.html"
}



president.onload = function load() {
    alert("Your computer is disgusted!!!");
}

function randomtext() {
    returnme.value = "You can't escape!";
    returnme.style.fontSize = "100px";
}

setInterval(function youDidAWrong() {
    console.log("Why did you vote for McGovern")
    console.log("Are you ok with this as your president?")
    console.log("Fix Your Mistakes Hethean")
}, 1000)

president.onmousemove = function(event) {
    //find the window relative field coordinates
    let presidentCoords = this.getBoundingClientRect();
    //clienttop

    let presidentBallCoords = {
        top: event.clientY - presidentCoords.y - president.
        clientTop - presidentBall.clientHeight / 2,
        left: event.clientX - presidentCoords.x - president.
        clientLeft - presidentBall.clientWidth / 2
    }

    //prevent the ball from going outside the court
    if (presidentBallCoords.top < 0) presidentBallCoords.top = 0;
    if (presidentBallCoords.left < 0) presidentBallCoords.left = 0;
    if (presidentBallCoords.left + presidentBall.clientWidth > president.clientWidth) presidentBallCoords.left = president.clientWidth - presidentBall.clientWidth;
    if (presidentBallCoords.top + presidentBall.clientHeight > president.clientHeight) presidentBallCoords.top = president.clientHeight - presidentBall.clientHeight;

    presidentBall.style.left = presidentBallCoords.left + 'px'
    presidentBall.style.top = presidentBallCoords.top + 'px'
}