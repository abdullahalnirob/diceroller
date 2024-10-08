let button = document.querySelector(".btn");
let min = 1;
let max = 7;
function ran() {
  let rel = Math.floor(Math.random() * (max - min) + min);
  if (rel === 1) {
    document.getElementById("MyImg").src = "dice-1.svg";
  } else if (rel === 2) {
    document.getElementById("MyImg").src = "dice-2.svg";
  } else if (rel === 3) {
    document.getElementById("MyImg").src = "dice-3.svg";
  } else if (rel === 4) {
    document.getElementById("MyImg").src = "dice-4.svg";
  } else if (rel === 5) {
    document.getElementById("MyImg").src = "dice-5.svg";
  } else if (rel === 6) {
    document.getElementById("MyImg").src = "dice-6.svg";
  } else rel = "Something went wrong";
}
button.addEventListener("click", () => {
  ran();
  var roll = new Audio("roll.mp3");
    roll.play();
    setTimeout(() => {
        button.innerHTML="Rolling..."
        button.disabled=true
    }, [100])
    setTimeout(() => {
        button.innerHTML="Roll"
        button.disabled=false
    }, [500])
       button.innerHTML="Roll"
});
document.getElementById("MyImg").src = "dice-1.svg";
