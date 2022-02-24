const fs = require('fs');

var inputFileName = '5-letters-palavras.txt';

fs.readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    var arrayDePalavra = data.split('\n');
   
    var asdfsdf = arrayDePalavra
        .filter(x => x.indexOf('m') == -1)
        .filter(x => x.indexOf('i') == -1)
        .filter(x => x.indexOf('t') == -1)
        .filter(x => x.indexOf('s') == -1)
        .filter(x => x.indexOf('e') == -1)
        .filter(x => x.indexOf('l') == -1)
        .filter(x => x.indexOf('a') == -1)
        .filter(x => x.indexOf('p') == -1)
        .filter(x => x.indexOf('g') == -1)

 
        .filter(x => x.indexOf('r') > -1)
        .filter(x => x.indexOf('r') != 4)
        .filter(x => x.indexOf('r') != 1)
        .filter(x => x.indexOf('r') != 0)
        .filter(x => x.indexOf('c') > -1)
        .filter(x => x.indexOf('c') != 3)
        .filter(x => x[2] == 'u')
        .filter(x => x[4] == 'o')
        .filter(x => x[1] == 'o')
    
    console.log(asdfsdf.join(' | '));
});