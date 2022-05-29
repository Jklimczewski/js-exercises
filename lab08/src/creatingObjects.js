// ========================================
// ZADANIE 1
// ========================================

//  Zdefiniuj pola 'title' i 'author' i funkcję print(), która wypisze: author - title

const book0 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    print: function() {
      return console.log(this.author + " - " + this.title)
    }
  };
  
  // book0.print();
  
  const book1 = {
    title: "Stulecie winnych",
    author: "Ałbena Grabowska",
    print: function() {
      return console.log(this.author + " - " + this.title)
    }
  };
  
  // book1.print();
  
  const book2 = Object.create({
    title: "Henryk Sienkiewcz",
    author: "Krzyżacy",
    print: function() {
      return console.log(this.author + " - " + this.title)
    }
  });
  
  // book2.print();
  
  function BookCreator(title, author) {
    const b = {
      title: title,
      author: author,
      print: function() {
        return console.log(this.title + " - " + this.author)
      }
    };
    return b;
    // properties
  }
  
  const book3 = BookCreator("Cień wiatru", "Carlos Ruiz Zafon");
  const book4 = BookCreator("Ojciech Chrzestny", "Mario Puzo");
  
  // book3.print();
  // book4.print();
  
  // ========================================
  // ZADANIE 2
  // ========================================
  
  // Przetestuj poniższy kod i odpowiedz na pytania
  
  function testThis() {
    console.log(this);
  }
  
  // testThis();
  
  function testThis2() {
    "use strict";
    console.log(this);
  }
  
  // testThis2();
  
  // 2.1. Czym jest this?
  // this jest specjalną zmienną przyjmującą wartość obiektu, w której ją piszemy. Pozwala nam odwoływać się do właściwości obiektu
  // 2.2. Do czego odwołuje się this w obu przypadkach
  // w pierwszym przypadku wypisuje wszystkie przypisane na stałe wartości obiektu, po wpisaniu 'use strict' jest undefined
  
  const person = {
    name: "Oscar Wilde",
    print() {
      console.log(this.name);
  
      function a() {
        console.log(a.name + ": " + person.name)
      }
      a();
    },
  };
  person.print();
  
  // 2.3. Jakie wartości przyjmuje this w powyższych przypadkach i dlaczego?
  // Przyjmuje wartość Oscar Wilde, ponieważ odwołujemy się do wartości name, a poźniej wszystkie stałe wartości obiektu
  // 2.4. Zmodyfikuj powyższy kod w ten sposób, aby funkcja a wyświetlała w konsoli 'a: Oscar Wilde'. Nie używaj arrow function.
  
  const printName = function () {
    console.log(this.name);
  };
  
  const person1 = {
    name: "Aaron Towels",
    printName
  };
  
  const person2 = {
    name: "Tom Clancy",
    printName
  };
  
  person1.printName()
  person2.printName()
  // 2.5. Za pomocą funkcji printName wypisz 'name' obu autorów. Nie zmieniaj implementacji funkcji printName!
  
  const person3 = {
    name: "Arthur Conan Doyle",
    print() {
      const a = () => {
        console.log(this);
      };
      a();
    },
  };
  person3.print();
  
  // 2.6. Co wydrukuje w konsoli powyższy kod? Jaki scope ma arrow function?
  // Arrow function ma scope mniejszy, lokalny. This w tym wypadku to wartości obiektu, które widzi funckja
  
  // ========================================
  // ZADANIE 3
  // ========================================
  
  // Powróćmy do zadania 1.
  // Dlaczego nasza funkcja BookCreator nie jest najlepszym rozwiązaniem do tworzenia obiektów?
  // Gdyż tworzymy w niej obiekt, który poźniej jest zwracany. Dodatkowo możemy w środku funkcji zmienić wartość argumentów i one pierwotne zostaną zapomniane
  
  // Zmodyfikuj funkcję BookCreator tak, aby inicjalizowała pola author i title.
  // Funkcję print zadeklaruj jako wspólną dla wszystkich obiektów tworzonych przez BookCreator.
  // Dopisz do tworzonych obiektów pole readers, które będzie zawierało liczbę czytelników.
  // Zadeklaruj funkcję addReader, która inkrementuje pole readers. addReader powinna być funkcją wspólną, tak jak print.
  
  function BookCreator(title, author) {
      this.title = title;
      this.author = author;
      this.readers = 0;
      this.print = function() {
        console.log(this.title + " - " + this.author);
      }
      this.addReader = function() {
        this.readers++;
      }
  }
  
  const book5 = new BookCreator("Cień wiatru2", "Carlos Ruiz Zafon2");
  book5.addReader()
  book5.addReader()
  
  // ========================================
  // * ZADANIE 4
  // ========================================
  
  // Na stworzonym obiekcie wywołaj funkcję hasOwnProperty('isBestseller').
  console.log(book5.hasOwnProperty("readers"))
  // ========================================
  // Napisz dlaczego nasz obiekt ma do niej dostęp. (jeśli wyskakuje błąd - powróć do poprzedniego zadania)
  // Ponieważ dziedziczy on tą metodę z domyślnego (głównego) obiektu
  
  // ========================================
  // * ZADANIE 5
  // ========================================
  
  // Odwołaj się do zmiennej __proto__ w stworzonym obiekcie, co zawiera ta zmienna i do czego służy?
  console.log(book5.__proto__ == BookCreator.prototype)
  // każda funkcja posiada własność protype i służy do wskazania skąd ma ona dziedziczyć własności