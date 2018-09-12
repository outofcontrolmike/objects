const shinobi = {
    name: "Shinobi",
    health: 150,
    strength: 25,
    xp: 0
    
};

console.log(`${shinobi.name} has ${shinobi.health}
health points and ${shinobi.strength} as strength`);
// Shinobi is harmed by an arrow - reduce health by 20
shinobi.health -= 20;
// Shinobi equips a strength necklace - increase strength by 10
shinobi.strength += 10;
//Shinobi leanrned a new skill
shinobi.xp += 15;
console.log(`${shinobi.name} has ${shinobi.health}
health points, ${shinobi.strength} as strength and ${shinobi.xp} XP points`);


function describe(character)
{
console.log(`${character.name} has ${character.health}
health points and ${character.strength} as strength and ${character.xp} XP points`);
}

// Modeling a dog

const dog =
{
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark: "barrrk barrrk barrrrk barrk, sassy bark!"

};

console.log(`${dog.name} is a ${dog.species} weighing in at ${dog.size} pounds`)
console.log(`Look at cat! ${dog.name} barks" ${dog.bark}"`);

// Modeling a bank account

const account = 
{
    name: "Alex",
    balance: 0,

}

/*const ryu = {
    name: "Ryu",
    health: 200,
    strength: 99,
    describe (){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`;

    }
}
console.log(ryu.describe());

*/