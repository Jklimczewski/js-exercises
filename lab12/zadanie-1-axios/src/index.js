'use strict';
const axios = require('axios');

/* 
Zadanie 1.1

Stwórz projekt i dołącz do niego bibliotekę axios.

Następnie wykonaj zapytanie metodą GET za pomocą dodanej biblioteki pod następujący url: https://jsonplaceholder.typicode.com/posts
Jako pierwszy callback - sprawdź, czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
Jako następny callback - użyj destrukcji obiektów, aby wypisać w konsoli zmienną 'data' i 'headers'.
*/

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(res => {
    if (res.status == 200) return res
    else return Promise.reject("Błąd")
  })
  .then(result => {
    const { data, headers } = result
    console.log(data, headers)
  })
  .catch(err => console.log(err))

/* 
Zadanie 1.2 
Stwórz funkcję, która przyjmuje jako parametr obiekt takiej postaci:
{
    idUser: (pole typu int)
    title: (pole typu string)
    completed: (pole typu boolean)
}

Następnie wysyła taki obiekt za pomocą funkcji post z biblioteki axios pod url: https://jsonplaceholder.typicode.com/todos
Jeśli dodanie zakończy się sukcesem - wyświetli w konsoli komunikat 'Dodano' i wyświetli id dodanego obiektu. W przeciwnym wypadku wypisze błąd.
*/

function axioss(obj) {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", obj)
    .then(res => res.data)
    .then(data => {
      console.log("Dodano")
      console.log(data.id)
    })
    .catch(err => console.log(err))
}

axioss({
    idUser: 1,
    title: "Es",
    completed: true
})