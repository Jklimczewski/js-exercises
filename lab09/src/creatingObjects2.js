// 1. Uprość funkcję BookCreator z poprzednich zajęć tak, aby zawierała tylko nadawanie wartości polom. (użyj operatora this) 
// Dodaj wywołanie słowa kluczowego new, przy wywołaniu BookCreator(). 
function BookCreator(title, author) {
    this.title = title;
    this.author = author;
}
  
const book1 = new BookCreator("Tytył", "Autor");
console.log(book1);

// BookCreator jest konstruktorem, a je zawsze (ZAWSZE) deklarujemy zaczynając nazwę od wielkiej litery

// 1.1. Użyj zmiennej prototype, aby dodać funkcje print() i addReader() do tworzonych obiektów.

BookCreator.prototype = {
    print: function() {
        console.log(this.title + " - " + this.author);
    },
    addReader: function() {
        this.reader++;
    }
}

const book2 = new BookCreator("esa", "aua");
book2.print();
console.log(book1.__proto__ == BookCreator.prototype);

// 2. Tworzymy alternatywną wersję powyższego kodu. Użyj słów kluczowych class i constructor, aby osiągnąć powyższy efekt.
class BookCreator2 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.readers = 0;
    }
    print = function() {
        console.log(this.title + " - " + this.author);
    }
    addReader() {
        this.readers++;
    }
}
const book = new BookCreator2("tytuł", "autor");
book.print();

// 3. Znasz już wiele sposób na stworzenie obiektu. Dlaczego więc nie użyć arrow function?
// Uzupełnij poniższy kod o inicjalizację pola name i age. Dodaj wewnąrz funkcję addAge, która inkrementuje wiek. 

const person = (name) => ({
    name: name,
    age: 1,
    addAge: function() {
        this.age++;
    }
});

const x = person("Kuba");
console.log(x.age);
x.addAge;
x.addAge;
console.log(x.age);

// Przetestuj działanie tak stworzonego obiektu, korzystając z wiedzy, którą już masz. Jakie są róznice pomiędzy stworzeniem obiektu za pomocą poprzednich metod?
// (przetestuj prototype, new itd.)

person.prototype = {
    changeName: function() {
        this.name = "Wojtek";
    }
}
const y = person("Hubert")
y.changeName;
console.log(y.name)