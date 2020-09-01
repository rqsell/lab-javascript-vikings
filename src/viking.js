// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => {
        return this.strength
    }
    receiveDamage = (damage) => {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage = (damage) => {
        this.health -= damage
        switch (this.health > 0) {
            case true:
                return `${this.name} has received ${damage} points of damage`;

            case false:
                return `${this.name} has died in act of combat`;
        }
    }
    battleCry = () => {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength, name) {
        super(health, strength)
        this.name = "Saxon"
    }
    receiveDamage = (damage) => {
        this.health -= damage
        switch (this.health > 0) {
            case true:
                return `A ${this.name} has received ${damage} points of damage`;

            case false:
                return `A ${this.name} has died in combat`;
        }
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []

    }
    addViking = (Viking) => {
        this.vikingArmy.push(Viking)
    }
    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
        let v = Math.floor(Math.random() * this.vikingArmy.length)
        let randomV = this.vikingArmy[v]
        let s = Math.floor(Math.random() * this.saxonArmy.length)
        let randomS = this.saxonArmy[s]
        let result = randomS.receiveDamage(randomV.strength)
        if (randomS.health <= 0) {
            this.saxonArmy.splice(s, 1)
        }
        return result
    }
    saxonAttack() {
        let s = Math.floor(Math.random() * this.saxonArmy.length)
        let randomS = this.saxonArmy[s]
        let v = Math.floor(Math.random() * this.vikingArmy.length)
        let randomV = this.vikingArmy[v]
        let result = randomV.receiveDamage(randomS.strength)
        if (randomV.health <= 0) {
            this.vikingArmy.splice(v, 1)
        }
        console.log(result)
        return result
    }

    showStatus() {
        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!"
        }
        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survived another day..."
        } else {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}