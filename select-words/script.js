const { readFile } = require('fs');

var inputFileName = 'palavras.txt';
var outputFileName = '5-letters-palavras.txt';


readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    var arr = data.split('\r\n');
    var outPutArray = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length == 5){
            outPutArray.push(arr[i]);
        }
    }
});