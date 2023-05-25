var time = document.getElementById("c_time");
var time2 = document.getElementById("c_time2");
var timeWithoutSeconds;
var formattedTime="nu";
setInterval(function() {
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);
function setTime(timeInput) {
  var inputTime = timeInput.value;
  var timeParts = inputTime.split(":");
  var hours = parseInt(timeParts[0]);
  var minutes = parseInt(timeParts[1]);

  var time = new Date();
  time.setHours(hours);
  time.setMinutes(minutes);

   formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });


 
}
var i=0;
setInterval(function(){
  
  var t2=new Date();
var formattedTime2 = t2.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
 timeWithoutSeconds = formattedTime2;
  if(timeWithoutSeconds==formattedTime){
    let vs=document.getElementById("img1");
    vs.classList.add("animImage");
    i++;
  } 
  if(i==1){
    playAudio();
  }
},1000);


function playAudio(){
  var audioUrl = 'y2mate.com - 1 Minute Countdown Timer with Music  Unicorn Dancing Timer.mp3';

// Create an Audio object
var audio = new Audio(audioUrl);
 audio.play();
}

