let seconds = 0;
let minutes = 0;
let hours   = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//define var to hold setinterval function
let Interval = null;

function stopWatch(){
  seconds++;

  if(seconds / 60 === 1){
    seconds = 0;
    minutes++;
  }

    if(minutes / 60 === 1){
      minutes = 0;
      hours++;
    }

  if(seconds<10){
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if(minutes<10){
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if(hours<10){
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }
    //display updated time value to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":"+ displaySeconds;
}


function start(){
  Interval = window.setInterval(stopWatch, 100);
}

function stop(){
  clearInterval(Interval);
}

function reset(){
  window.clearInterval(setInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerHTML = "00:00:00"
}
