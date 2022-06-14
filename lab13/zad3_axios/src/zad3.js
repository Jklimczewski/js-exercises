const axios = require('axios');

const tab = [1,2,3,4,5];
const tab2 = tab.map(el => Math.floor(Math.random() * (99 - 1 + 1)) + 1);
console.log(tab2);

const posts = [];
const comments = [];
const wynik = [];

tab2.forEach( el => {
    const post = axios.get(`https://jsonplaceholder.typicode.com/posts/${el}`).then(res => res.data)
        .then(result => {
            const {title, body} = result;
            return {"title": title, "body": body}
        })
    posts.push(post);

    const comment = axios.get(`https://jsonplaceholder.typicode.com/posts/${el}/comments`).then(res => res.data)
        .then(result => {
            const helper = result.reduce((akum, elem) => {
                const {name, email, body} = elem;
                akum.push({ "name": name, "email": email, "body": body });
                return akum;
            }, [])
            return helper;
        })
    wynik.push(Promise.all([post, comment]).then(n => { 
        return { "entry": n[0], "comments": n[1] }; 
    }))
});

Promise.all(wynik).then(tab => tab.reduce((acc, elem) => {
    acc.push(elem);
    return acc;
}, [])).then(n => n.forEach((n) => console.log(n)))

