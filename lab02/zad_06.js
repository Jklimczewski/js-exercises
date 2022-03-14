'use script'
const cat = { 
    name: 'Filemon', 
    age: 6
}
cat.description = "Kot ma na imię " + cat.name + " i ma " + cat.age + " lat.";
cat.breed = "dachowiec";
cat.colour = "różowy";
cat.description += " Rasa to " + cat.breed + " a jego kolor to " + cat.colour + ".";
console.log(cat.description)
