const restartButton = document.getElementById("restart-button");
const actionBar = document.getElementById("action-bar");

function createAttackButton() {
  let attackButton = document.createElement("button");
  attackButton.textContent = "Attack";
  actionBar.appendChild(attackButton);
}
createAttackButton();
