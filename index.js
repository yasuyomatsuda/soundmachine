var startButton = document.querySelector('.start');
var stopButton = document.querySelector('.stop');
var light = document.querySelector('.lighting');
var audio = new Audio('sounds/wave1.mp3');
audio.loop = true;
var timeoutID;
var playing = true;

//スタートボタンを押したら音を流す
function start(){
    audio.play();
    playing = true;
    light.innerHTML = 25;
    // startButton.add("disabled");

    var totalTime = 25000; // 25sec
    var oldTime = Date.now();

    var timerID = setInterval(function(){
        var currentTime = Date.now();
        var diff = currentTime - oldTime;

        var remainMsec = totalTime - diff;
        var remainSec = Math.ceil(remainMsec / 1000);
        light.innerHTML = remainSec;

        if(remainSec <= 0){
            clearInterval(timerID);
            light.innerHTML = "";
            startButton.remove("disabled");
        }
        if(playing === false){
            clearInterval(timerID);
            light.innerHTML = "";
        }
    }, 1000);
    timeoutID = window.setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 25000);
}

//ストップボタンを押したら音をストップさせる
function stop(){
    audio.pause();
    clearTimeout(timeoutID);
    audio.currentTime = 0;
    playing = false;
    startButton.remove("disabled");
}
