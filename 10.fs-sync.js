const {readFileSync,writeFileSync } = require('fs');

const primo = readFileSync('./content/first.txt','utf-8');
const secondo = readFileSync('./content/second.txt','utf-8');

console.log(primo,secondo);


writeFileSync('./content/risultato.css',`qui il risultato ${primo,secondo}`,{flag:'wx'});





// const fs = require('fs');
// fs.readFileSync(fs.writeFileSync);
// console.log(readFileSync);
// console.log(fs);