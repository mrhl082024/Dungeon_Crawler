const restartButton = document.getElementById("restart-button");
const actionBar = document.getElementById("action-bar");
const navbar = document.getElementById("navbar");
const healthBar = document.getElementById("health-bar");

function createAttackButton() {
  let attackButton = document.createElement("button");
  attackButton.textContent = "Attack";
  actionBar.appendChild(attackButton);
}
createAttackButton();

function createHealthBar() {
  let health = document.createElement("progress");

  health.value = 100;
  healthBar.appendChild(health);
}
createHealthBar();
