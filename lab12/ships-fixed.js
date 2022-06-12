/*
konstruktor klasy Vector2 posiadający:
- pola x i y
- funkcje
  - diff(vector) – odejmuje aktualny wektor od wektora podanego w argumencie
  - multiplyBy(number) – mnoży x i y wektora razy liczbę podaną w argumencie
  - toString() – zwraca tekst w formacie "x: <wartość> y: <wartość>"
*/

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  diff(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }
  
  multiplyBy(number) {
    this.x *= number;
    this.y *= number;
  }
  
  toString() {
    return `x: ${this.x} y: ${this.y}`;
  }
}

const vector1 = new Vector2(10, 10);
const vector2 = new Vector2(5, 10);

console.log('Wektor 1:', vector1);

vector1.diff(vector2);
console.log('Wektor 1 odjąć wektor 2:', vector1);

vector1.multiplyBy(2);
console.log('Wektor 1 po pomnożeniu x2:', vector1);
console.log(vector1.toString());

/*
konstruktor klasy Ship o następujących:
- polach:
  - faction
  - position – typu Vector2
  - strength
  - health
- funkcjach:
  - getDistance(enemyShip) – jeśli to możliwe, oblicza dystans dzielący dwa statki (różnicę wektorów). W przeciwnym wypadku wypisuje komunikat błędu
  - checkHealth() – sprawdza, czy zdrowie statku spadło poniżej 0. Jeśli tak wypisuje w konsoli odpowiedni komunikat
  - getDamage(amount) – obniża liczbę punktów zdrowia o podaną liczbę i sprawdza, czy statek został zniszczony
  - makeDamage(enemyShip) – zadaje obrażenia statkowi podanemu w argumencie (o wartość zmiennej strength)
*/

class Ship {
  constructor(fraction, position, strength, health) {
    this.fraction = fraction,
    this.position = position,
    this.strength = strength,
    this.health = health
  }

  getDistance(enemyShip) {
    if (this.position === undefined || enemyShip.position === undefined) {
      console.log('Obliczenie niemożliwe.');
      return;
    }

    if (this.health < 0 || enemyShip.health < 0) {
      console.log('Statek jest zniszczony.');
      return;
    }

    const value = this.position.diff(enemyShip.position);
    return value;
  }

  checkHealth() {
    if (this.health < 0) {
      console.log(`Zdrowie statku ${this.fraction} poniżej 0. Statek został zniszczony.`);
    } 
  }
  
  getDamage(amount) {
    console.log(`Statek ${this.fraction} otrzymał obrażenia równe: ${amount}`);
    this.health -= amount;
    this.checkHealth();
  }
  
  makeDamage(enemyShip) {
    enemyShip.getDamage(this.strength);
  }
}

/*
klasę CreateRebelShip dziedziczącą po Ship:
- niech konstruktor przyjmuje parametry: position, strength, health.
- wartość faction powinna być na stałe ustawiona jako 'Rebel Alliance'.
- zdefiniuj funkcję dla klasy CreateRebelShip:
  - hyperspeed() – ustawia wartość position na undefined
*/

class CreateRebelShip extends Ship {
  constructor (position, strength, health) {
    super('Rebel Alliance', position, strength, health);
  }

  hyperspeed() {
    this.position = undefined;
  }
}

/*
klasę DeathStar dziedziczącą po Ship
- niech konstruktor przyjmuje parametr: position
- niech faction będzie ustawiony na stałe na 'Empire'.
- niech klasa zawiera następujące pola: deathRayAvailable
- zawierającą funkcje:
  - makeDamage(enemyShip) – jeśli deathRayAvailable jest ustawione na true, to wywołuje funkcje odziedziczoną po Ship, a następnie ustawia deathRay na niedostępny na ustaloną liczbę sekund. Jeśli deathRayAvailable jest równe false, drukuje komunikat.
*/

class DeathStar extends Ship {
  constructor (position) {
    super('Empire', position, 100, 100);
    this.deathRayAvailable = true;
  }

  makeDamage(enemyShip) {
    return new Promise((resolve, reject) => {
      if (this.deathRayAvailable) {
        this.deathRayAvailable = false;
        super.makeDamage(this, enemyShip)
        setTimeout(() => resolve(this.resetCountdown()), 6 * 1000);    
      } else {
        reject('Death ray not available');
      }
    });
  }

  resetCountdown() {
    this.deathRayAvailable = true;
    console.log('Death ray available');
  } 
}

const enemyShip = new CreateRebelShip(new Vector2(15, 21), 20, 20)
const deathStar = new DeathStar(new Vector2(10, 10));

deathStar.makeDamage(enemyShip).then(() =>
  deathStar.makeDamage(enemyShip)
);

deathStar.makeDamage(enemyShip).catch((err) => {
  console.log(err);
});