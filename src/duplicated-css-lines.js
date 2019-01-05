const fs = require('fs');
const log = console.log;

//colors
require('./components/colors');

//Reading second file in command after call library
fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) throw err;
    const processData = process.argv[2].includes('vue') ? data.match(/<style([\s\S]*?)style>/im).pop().split('\n') : process.argv[2].includes('css') ? data.split('\n') : data.split('\n') ;
    let resultDuplicated = '';
    let resultNumberOfDuplicatedLines = '';
    
    if (getData(processData).dupes.length > 0) {
        resultDuplicated = getData(processData).dupes;
        resultNumberOfDuplicatedLines = getData(processData).numberOfDuplicatedLines + ' Duplicated Lines';
    } else {
        resultDuplicated = '\033[32m 🎉   Congrats you don\'t have any style duplicate values  🎉';
    }

    log('\033[31m' + resultDuplicated);
    resultNumberOfDuplicatedLines ? log('\033[33m \n' + resultNumberOfDuplicatedLines ) : '';
});

//Finding Duplicates of array
const findDuplicates = (arr) => {
    let object = {};
    let result = [];

    arr.forEach((item) => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
        object[prop] >= 2 ? result.push(prop) : '';
    }

    return result;
}

//function that take file data and start searching
const getData = (data) => {
    //variables
    let dupes = null;
    let arrRes = [];
    let stringRes = '';
    let concatenate = null;
    let countSkipLines = 0;
    let findDuplicatesCatcher = 0;
    let numberOfDuplicatedLines = 0;
    let skippedValues = ['{', '$', '<', '>', 'var', ':root', '&', '--', '@', 'extends'];
    let unSkippedValues = ['}'];

    //foreach to working in scopes and ignore .selector and brackets
    data.forEach((element) => {
        if (countSkipLines == 0) {
            concatenate = false;
        }
        if (skippedValues.some(el => element.includes(el))) {
            countSkipLines++;
            concatenate = true;
            return; 
        }
        if (unSkippedValues.some(el => element.includes(el))) {
            countSkipLines--;
            return;
        }
        if (concatenate) {
            arrRes.push(element.trim().replace(/\s/g, '').replace(/\:/g, ': '));
            stringRes += element.trim() + '\n';
        }
    });

    //Return duplicates lines
    findDuplicatesCatcher = findDuplicates(arrRes).filter(post => post.length > 1);
    numberOfDuplicatedLines = findDuplicatesCatcher.length;
    dupes = findDuplicatesCatcher.toString().replace(/\,/g, '\n');
    
    return {
        dupes,
        stringRes,
        numberOfDuplicatedLines
    };
}