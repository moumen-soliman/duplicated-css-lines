const fs = require('fs');
fs.readFile(process.argv[2], (err, data) =>  {
    if (err) throw err;
    let convertedFileToObject = Object;
    let spaceRemover = Object;
    let findDuplicates = Function;
    convertedFileToObject = data.toString().split('\n');
    spaceRemover = convertedFileToObject.map(post => post.replace('{', '').replace('}', '').replace('.', '').replace(';', '').replace('img', '').replace('span', '').replace('from', '').replace(/\s+/g, '')).filter(i => i);
    findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
    console.log(findDuplicates(spaceRemover).length > 0 ? findDuplicates(spaceRemover) : 'Congrats you don\'t have any duplicate')
});