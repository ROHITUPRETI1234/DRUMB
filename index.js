//Detecting button Press
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  }
  );
}

// document.addEventListener("keydown",function()
// {
// alert("Key is Pressed");
// }
// );
//Detecting Keypress
document.addEventListener("keypress",function(event)
{
makeSound(event.key);
buttonAnimation(event.key);
}
);

function makeSound(key) {

  switch (key)
  {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default: console.log(buttonInnerHtml);
// alert("I got clicked");
  // var audio = new Audio("sounds/tom-1.mp3");
  // audio.play();
  //  console.log(this);
  // this.style.color="cyan";

  }
}

function buttonAnimation(currentKey) {
  var activeButton=document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}
  