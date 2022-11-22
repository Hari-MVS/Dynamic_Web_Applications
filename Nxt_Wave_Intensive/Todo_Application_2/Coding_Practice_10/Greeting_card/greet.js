let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parsed = JSON.parse(greeting);

let p1 = document.getElementById('p1');
p1.textContent = 'From: ' + parsed.from;

let p2 = document.getElementById('p2');
p2.textContent = 'To: ' + parsed.to;

let ptext = document.getElementById('ptext');
ptext.textContent = parsed.greetText;
