const fs = require('fs');
fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) throw err;
    console.log(
        getData(data).dupes.length > 0 ? getData(data).dupes : 'Congrats you don\'t have any duplicate'
    );
});

//Finding Duplicates of array
const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);

const getData = (data) => {
    //variables
    const arrRes = [];
    let stringRes = '';
    let concatenate = null;
    let countOpenCurlyBraces = 0;

    //split array
    const arr = data.split('\n');

    //foreach to working in scopes and ignore .selector and brackets
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

    const dupes = findDuplicates(arrRes);
    return {
        dupes,
        stringRes
    };
}