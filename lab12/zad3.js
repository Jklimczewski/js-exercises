class Vector2 {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    diff(vector) {
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
    }
    multiplyBy(number) {
        this.x = this.x * number;
        this.y = this.y * number;
    }
    toString() {
        console.log(`x: ${this.x} y: ${this.y} `);
    }
}

const vector1 = new Vector2(3,4);
vector1.diff(new Vector2(1,1));
vector1.multiplyBy(3);
vector1.toString();

class Ship {
    constructor(faction, position, strength, health) {
        this.faction = faction;
        this.position = position;
        this.strength = strength;
        this.health = health;
    }
    getDistance(enemyShip) {
        try {
            const one = Math.abs(this.position.x - enemyShip.position.x);
            const two = Math.abs(this.position.y - enemyShip.position.y);
            console.log([one, two]);
        } catch (err) {
            console.log(err);
        }
    }
    checkHealth() {
        if (this.health < 0) console.log(`Statek ${this.faction} zniszczony`);
        return;
    }
    getDamage(amount) {
        this.health -= amount;
        this.checkHealth();
    }
    makeDamage(enemyShip) {
        enemyShip.health -= this.strength;
    }
}

const ship1 = new Ship("idk", new Vector2(5, 10), 10, 10);
const ship2 = new Ship("idk2", new Vector2(2, 5), 10, 10);
ship1.getDistance(ship2);
ship1.getDamage(12);
ship1.makeDamage(ship2);
ship2.checkHealth();

class CreateRebelShip extends Ship {
    constructor(position, strength, health) {
        super("Rebel Ship", position, strength, health);
    }
    hyperspeed() {
        this.position = undefined;
    }
}

const rebelShip1 = new CreateRebelShip(new Vector2(1, 2), 120, 10);
rebelShip1.hyperspeed()

class DeathStar extends Ship {
    constructor(position) {
        super("Empire", position, 100, 1000);
        this.deathRayAvailable = true;
    }
    makeDamage(enemyShip) {
        return new Promise((resolve, reject) => {
            if (this.deathRayAvailable) {
              this.deathRayAvailable = false;
              super.makeDamage(this, enemyShip);
              setTimeout(() => resolve(this.deathRayAvailable = true), 5000);    
            } else {
              reject('Niedostępne');
            }
          });
    }
}
const deathStar1 = new DeathStar(new Vector2(8,6));
const ship3 = new Ship("idk3", new Vector2(5, 10), 100, 99);

deathStar1.makeDamage(ship3); 
ship3.checkHealth();
console.log(deathStar1.deathRayAvailable);

deathStar1.makeDamage(ship3).catch(error => console.log(error)); 
setTimeout(() => console.log(deathStar1.deathRayAvailable), 6000);