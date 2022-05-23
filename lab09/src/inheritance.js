'use strict';

// 1.1 
// Co wyświetlą na ekranie poniższe wywołania?

const book = {
    title: "Potop",
    author: "Henryk Sienkiewicz"
}

//console.log(book.__proto__ === Object.prototype);
//true
//console.log(book.__proto__.__proto__ === null);
//true 

// 1.2. 
// Zastanów się, co należy wpisać w miejsce ..., tak aby każde wywołanie po odkomentowaniu zwróciło true.

const animals = ["dog", "cat", "rabbit", "hamster"];

//console.log(animals.__proto__ === Array.prototype);
//console.log(animals.__proto__.__proto__ === Object.prototype);
//console.log(animals.__proto__.__proto__.__proto__ === null);

// 1.3. 
// Co zostanie wyświetlone na ekranie w poniższym przykładzie?

function Animal(animal) {
    this.animal = animal;
}

var dog = new Animal('dog');
var cat = new Animal('cat');
dog.whatIs = function () {
    console.log("It's a " + this.whatIs());
}

// console.log(dog.__proto__ === Animal.prototype);
//true
// console.log(dog.__proto__ === cat.__proto__);
//true

// 1.4.
// Stwórz obiekt za pomocą funkcji CreateMovie (zawierający klucze bez wartości: director, title, year) wykorzystując słówko `this`.
// Jeśli przy tworzeniu obiektu rok nie zostanie podany powinien przyjmować wartość "unknown".

function CreateMovie(director, title, year = "unknown") {
    this.director = director;
    this.title = title;
    this.year = year;
}

// Następnie nie zmieniając implementacji funkcji CreateMovie, dodaj do niego metody: 
// * isOlder(year) - zwracającą true/false w zależności od tego, czy podany film jest młodszy/starszy nić rok 2000.
// * print - wyświetlającą: "director: title (year)"

CreateMovie.prototype.isOlder = function(year) {
    return this.year > year;
}
CreateMovie.prototype.print = function() {
    console.log(this.director + ": " + this.title + " (" + this.year + ")" );
}
const es = new CreateMovie("es", "sa", 2001);
console.log(es.isOlder(2000));
es.print();

// 1.5.
// Uzupełnij poniższy konstruktor o inicjalizację name, type i funkcję printInstrument. Funkcja printInstrument powinna być współdzielona między wszystkie utworzone obiekty.

function CreateInstrument(name, type) {
   const instrument = Object.create({
       name: name,
       type: type,
       printInstrument: function() {
            console.log(this.name);
       }
   })
   return instrument;
}
const skrzypce = CreateInstrument("skrzypce", "strunowy");
skrzypce.printInstrument();

// 1.6. 
// Uzupełnij poniższy konstruktor, który tworzy obiekt dziedziczący po Instrument. Wykorzystaj do jego stworzenia konstruktor z zadania poprzedniego.
// Zdefiniuj funkcję setStrings(number), która ustala liczbę strun w instrumencie (ta funkcja też powinna być współdzielona). NewStringInstrument powinien mieć też dostęp do funkcji, która znajduje się w Instrument.
// Podpowiedź: aby zmienić wartość zmiennej __proto__ należy użyć - Object.setPrototypeOf(object, prototype) - należy użyć tej funkcji dwa razy w tym rozwiązaniu. 

function CreateStringedInstrument(name, type, stringsCount) {
    const newStringedInstrument = {
        stringsCount: stringsCount,
        setStrings: function(number) {
            this.stringsCount = number;
        }
    }
    Object.setPrototypeOf(newStringedInstrument, CreateInstrument(name, type));

    return newStringedInstrument;
}

const stringedInstrument = CreateStringedInstrument('gitara', 'strunowy', '3');
stringedInstrument.printInstrument();
stringedInstrument.setStrings(3);


// 1.7. 
// Przeanalizuj poniższy kod i odpowiedz na umieszczone w nim pytania.

function Instrument(name, type) {
    this.name = name;
    this.type = type;
}

Instrument.prototype.printInstrument = function () {
    console.log("Instrument: " + this.name + ", typ: " + this.type);
}

function StringedInstrument(stringsCount, name, type) {
    Instrument.apply(this, [name, type]);
    this.stringsCount = stringsCount;
}

StringedInstrument.prototype = Object.create(Instrument.prototype);

// a) Stwórz instancję StringedInstrument.
const violin = new StringedInstrument(5, "violin", "stringed");

// b) W jaki sposób odwołać się do metody printInstrument?

violin.printInstrument();

// c) Zastąp wywołanie call() funkcją apply() 

// 1.8.
// Utwórz obiekt Animal z polem 'name' i funkcją printName, po którym będą dziedziczyły Mammal (z polem age i funkcją getAge) i Fish (z polem weight i funkcją increaseWeight()) . 
// Następnie stwórz kolejne obiekty - Dog (z polem breed i nadpisaniem funkcji getAge(), która tutaj będzie najpierw wywoływała funkcję getAge() z klasy dziedziczonej, a następnie mnożyła wynik razy 4 i wyświetlała go) 
// i Salmon (z funkcją catch()), które będą dziedziczyły odpowiednio po Mammal i Fish.
// W razie problemów wzoruj się na rozwiązaniu z poprzedniego zadania.

// class Animal2 {
//     constructor(name) {
//         this.name = name;
//     }
//     printName() {
//         console.log(this.name);
//     }
// }

// class Mammal extends Animal2 {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }
//     getAge() {
//         return this.age;
//     }
// }

// class Fish extends Animal2 {
//     constructor(name, weight) {
//         super(name);
//         this.weight = weight;
//     }
//     increaseWeight() {
//         this.weight++;
//     }
// }

// const ssak = new Mammal("czlowiek", 18);
// ssak.printName();
// console.log(ssak.getAge());

// const rybka = new Fish("łosoś", 100);
// rybka.printName();
// rybka.increaseWeight();
// console.log(rybka.weight)

// class Dog extends Mammal {
//     constructor(name, age, breed){
//         super(name, age);
//         this.breed = breed;
//     }
//     getAge () {
//         console.log(super.getAge());
//         return super.getAge() * 4
//     }
// }

// class Salmon extends Fish {
//     constructor(name, weight) {
//         super(name, weight);
//     }
//     catch() {
//         console.log("catched a: " + this.weight + "g " + this.name)
//     }
// }
// const pies = new Dog("owczarek", 10, "owczarek");
// console.log(pies.name);
// console.log(pies.age);
// console.log(pies.getAge());

// const losos = new Salmon("losoś", 1000);
// losos.printName();
// losos.catch();

function Animal2(name) {
    this.name = name;
    this.printName = function() {
        console.log(this.name);
    }
}

function Mammal(name, age) {
    Animal2.call(this, name)
    this.age = age;
}
Mammal.prototype = Object.create(Animal2.prototype);
Mammal.prototype.getAge = function() {
    return this.age;
}

function Fish(name, weight) {
    Animal2.call(this, name);
    this.weight = weight;
    this.increaseWeight = function() {
        this.weight++;
    }
}
Fish.prototype = Object.create(Animal2.prototype);

const ssak = new Mammal("czlowiek", 18);
ssak.printName();
console.log(ssak.getAge());

const rybka = new Fish("łosoś", 100);
rybka.printName();
rybka.increaseWeight();
console.log(rybka.weight);

function Dog(name, age, breed) {
    Mammal.call(this, name, age);
    this.breed = breed;
}
Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.getAge = function() {
    return 4 * Mammal.prototype.getAge.call(this);
}

function Salmon(name, weight) {
    Fish.call(this, name, weight);
    this.catch = function() {
        console.log("catched a: " + this.weight + "g " + this.name)
    }
}
Salmon.prototype = Object.create(Fish.prototype);

const pies = new Dog("owczarek", 10, "owczarek");
console.log(pies.name);
console.log(pies.age);
console.log(pies.getAge());

const losos = new Salmon("losoś", 1000);
losos.printName();
losos.catch();