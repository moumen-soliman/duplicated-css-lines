const fs = require('fs');
fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) throw err;
    console.log(
        getData(data).dupes.length > 0 ? getData(data).dupes : 'Congrats you don\'t have any duplicate'
    );
});

const getData = (data) => {
    let findDuplicates = Function;
    let countOpenCurlyBraces = 0;
    let concatenate = null;
    let stringRes = '';
    const arrRes = [];
    const arr = data.split('\n');
    arr.forEach((element) => {
        if (countOpenCurlyBraces == 0) {
            concatenate = false;
        }
        if (element.includes('{')) {
            countOpenCurlyBraces++;
            concatenate = true;
            return;
        }
        if (element.includes('}')) {
            countOpenCurlyBraces--;
            return;
        }
        if (concatenate) {
            arrRes.push(element.trim());
            stringRes += element.trim() + '\n';
        }
    });
    findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
    const dupes = findDuplicates(arrRes);
    return {
        dupes,
        stringRes
    };
}