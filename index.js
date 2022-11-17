// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");

const displayScore = (winner, loser) => {
  console.log(`${winner.name} ${loser.name} ${winner.name} : ${winner.life}`);
};

// const displayStrike = (fighter) => {
//     console.log(fighter.name, fighter.life);
// }

const displayStrike = (enemy, damage) => {
  console.log(
    `${enemy.name} a perdu ${damage} vie. Il lui reste ${enemy.life} vie`
  );
};

// creation des combattants
const heracles = new Fighter("Heracles", 20, 6);
const nemean = new Fighter("Nemean Lion", 11, 13);

console.log(heracles.name, heracles.life);
console.log(nemean.name, nemean.life);

//  lancer la bataille
// heracles doit attaquer nemean tant que celui ci est en vie
//  nemean doit rendre les coups tant qu'heracles est en vie
//  il doit n'en rester qu'un

let round = 1;
while (heracles.isAlive() && nemean.isAlive()) {
  console.log(`Round ${round}`);
  displayStrike(nemean, heracles.fight(nemean));

  if (nemean.isAlive()) {
    displayStrike(heracles, nemean.fight(heracles));
  }
  round++;
}

if (heracles.isAlive()) {
  displayScore(heracles, nemean);
} else {
  displayScore(nemean, heracles);
}
