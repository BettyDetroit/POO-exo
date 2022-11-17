const MAX_LIFE = 100;

class Fighter {
constructor(name, strength, dexterity) {
this.name = name;
this.strength = strength;
this.dexterity = dexterity;
this.life = MAX_LIFE;
}
fight(enemy){
    // calculer un nombre aléatoire entre 1 et strength fighter ( force du coup)
    const potentialAttack = this.getRandomInt(this.strength)
    //  evitement : degat = force du coup - dexterite(enemy)
    const damage = Math.max(potentialAttack - enemy.dexterity, 0); 
        //  enleve les degats du nd de vie de l'enemy
    enemy.life = Math.max(enemy.life - damage, 0);
    return damage;
}

getRandomInt(max) {
return Math.floor(Math.random() * max) + 1;
}

isAlive() {
    return this.life > 0; 
}
};


module.exports = Fighter;






 