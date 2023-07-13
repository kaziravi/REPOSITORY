const playerHpDiv = document.querySelector(".playerHp");
const enemyHpDiv = document.querySelector(".enemyHp");
const attackBtn = document.querySelector("button");
const goldDiv = document.querySelector("h3");
const potionDiv = document.querySelector(".potion");
const enemyImg = document.querySelector(".enemyImg");

const gameScreen = document.querySelector(".game");
const gameOverScreen = document.querySelector(".over");

const startAgainButton = document.querySelector(".overButton");

const enemies = [
  "https://media.tenor.com/_cv0CC1D0OwAAAAC/green-monster-cute-creatures.gif",
  "https://media.tenor.com/sfEEb8K5JC8AAAAC/pixel-art.gif",
  "https://img.freepik.com/free-vector/cartoon-stone-monster-pixel-design_61878-700.jpg?size=626&ext=jpg",
  "https://as2.ftcdn.net/v2/jpg/02/09/93/83/1000_F_209938395_0bm4aQH9TbR383aXFmsuI1pVCz8ti0fY.jpg",
  "https://t3.ftcdn.net/jpg/02/19/37/08/360_F_219370887_OEa1g6YysaU97yb3PGmFQONAUiWsmKK1.jpg",
];

let playerHp = 100;
let enemyHp = 100;
let money = 0;

const swordBtn = document.getElementById("radio-sword");
const bowBtn = document.getElementById("radio-bow");
const wandBtn = document.getElementById("radio-wand");
const playAgainBtn = document.querySelector(".overButton");

attackBtn.onclick = () => {
  const rnd = (num) => Math.round(Math.random() * num);

  const playerDamage = rnd(10);
  let enemyDamage = rnd(8);

  money += rnd(5);

  enemyHp -= playerDamage;
  playerHp -= enemyDamage;

  enemyHpDiv.style.width = enemyHp + "%";
  playerHpDiv.style.width = playerHp + "%";
  goldDiv.innerText = "Gold: " + money;

  if (playerHp <= 0) {
    gameOver();
  }

  if (enemyHp <= 0) {
    enemyHp = 100;
    enemyImg.src = enemies[rnd(enemies.length - 1)];
    enemyHpDiv.style.width = enemyHp + "%";
  }

  if (swordBtn.checked) {
    const dodgeChance = 25;
    if (rnd(100) < dodgeChance) {
      enemyDamage = 0;
    }
  } else if (bowBtn.checked) {
    const doubleDamageChance = 30;
    if (rnd(100) < doubleDamageChance) {
      enemyHp -= playerDamage;
    }
  } else if (wandBtn.checked) {
    const healChance = 40;
    if (rnd(100) < healChance) {
      const healAmount = rnd(7) + 1;
      playerHp += healAmount;
      if (playerHp > 100) {
        playerHp = 100;
      }
    }
  }
};

playAgainBtn.onclick = () => {
  location.reload();
};

function gameOver() {
  gameScreen.style.display = "none";
  gameOverScreen.style.display = "block";
}
