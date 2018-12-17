const fs = require('fs');
fs.readFile(process.argv[2], (err, data) =>  {
    if (err) throw err;
    let convertedFileToObject = Object;
    let spaceRemover = Object;
    let findDuplicates = Function;
    convertedFileToObject = data.toString().split('\n');
    spaceRemover = convertedFileToObject.map(post => post.replace('{', '').replace('}', '').replace('.', '').replace(';', '').replace('img', '').replace('span', '').replace('from', '').replace(/\s+/g, '')).filter(i => i);
    findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
    const dupes = findDuplicates(spaceRemover);
    const result = dupes.map((item) => {
        splitted = item.split(':')
        return { [splitted[0]]: splitted[1] };
    });
    console.log(result.length > 0 ? result : 'Congrats you don\'t have any duplicate')
});