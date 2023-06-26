const path = require('path');

console.log(path.sep);

const filePath = path.join('/content','/subfolder','test.txt');
console.log(filePath);

const base = path.basename(filePath,'content','subfolder','test.txt');
console.log(base);
//il miglior percorso di artenza
const absolute = path.resolve(filePath,'content','subfolder','test.txt');
console.log(absolute);