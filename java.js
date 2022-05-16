function checker() {
    var result = confirm('Are you sure?');
    if (result == false) {
        event.preventDefault();
    }
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 0 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer-- < 0) {
            //window.location = "http://www.example.com";
            clearInterval(timer);
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 1 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};







console.log('hello if you are seeing this');

