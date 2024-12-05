const actionBar = document.getElementById("action-bar");

const startBtn = document.getElementById("start-button");

//gjør "Start" om til "Attack!"
startBtn.addEventListener("click", (e) => {
  startBtn.textContent = "Attack!";
});
