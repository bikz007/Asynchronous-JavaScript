//global variables
var millis=0;
var seconds;
var interval;
var start=false
var pause=true
//function calls
setUp()

//function declarations-definitions
function startTimer(){
  interval = setInterval(function(){
      millis+=0.01;
      millis=parseFloat(millis.toFixed(2));
      console.log(millis);
      document.getElementById("currentime").innerHTML=millis;
  },100);
}

function pauseTimer(){
  clearInterval(interval);
  return
}

function recordTimer(){
  var p = document.createElement("P");        // Create a <button> element
  p.setAttribute("class","extra")
  var t = document.createTextNode(millis);       // Create a text node
  p.appendChild(t);                                // Append the text to <button>
  document.body.appendChild(p);                    // Append <button> to <body> 
}

function resetTimer(){
  millis=0;
  document.getElementById("currentime").innerHTML=millis;
  clearInterval(interval);
  var extra = document.getElementsByClassName("extra");
  for(i=0;i<extra.length;i++){
    document.body.removeChild(extra[i])
  }
}

function setUp(){
  const start_stop=  document.getElementById("start-stop");
  const rest=document.getElementById("reset");
  const reco=document.getElementById("record");
  start_stop.addEventListener('click',function(){
    if(start==false && pause==true){
      startTimer();
      start=true;
      pause=false;
    }
    else{
      pauseTimer();
      start=false;
      pause=true;
    }
  });
  rest.addEventListener('click',function(){
    resetTimer();
    start=false;
    pause=true;
  })
  reco.addEventListener('click',function(){
    if(millis!=0)
      recordTimer();
  })
}