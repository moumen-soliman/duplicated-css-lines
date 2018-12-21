const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

//Reading second file in command after call library
fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) throw err;
    log(
        getData(data).dupes.length > 0 ? `${chalk.red(getData(data).dupes)} \n\n${chalk.yellow(getData(data).numberOfDuplicatedLines + ' Duplicated Lines')}` : chalk.green('Congrats you don\'t have any duplicate')
    );
});

//Finding Duplicates of array
const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);

//function that take file data and start searching
const getData = (data) => {
    //variables
    let dupes = null;
    let arrRes = [];
    let stringRes = '';
    let concatenate = null;
    let countOpenCurlyBraces = 0;
    let findDuplicatesCatcher = 0;
    let numberOfDuplicatedLines = 0;

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

    //Return duplicates lines
    findDuplicatesCatcher = findDuplicates(arrRes);
    numberOfDuplicatedLines = findDuplicatesCatcher.length;
    dupes = findDuplicatesCatcher.toString().replace(/\,/g, '\n');
    
    return {
        dupes,
        stringRes,
        numberOfDuplicatedLines
    };
}