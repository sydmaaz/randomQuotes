// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector(".person");

const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
    },
    {
        quote: "True friends stab you in the front.",
        author: "Oscar Wilde",
    },
    {
        quote: "Women are made to be Loved, not understood.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
    }];

btn.addEventListener('click', function(){
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].author;
})    