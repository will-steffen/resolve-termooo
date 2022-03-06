const fs = require('fs');

var inputFileName = '5-letters-palavras.txt';

fs.readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    var arrayDePalavra = data.split('\n');
   
    var asdfsdf = arrayDePalavra
        .filter(x => x.indexOf('m') == -1)
        .filter(x => x.indexOf('i') == -1)
        .filter(x => x.indexOf('t') == -1)
        .filter(x => x.indexOf('o') == -1)
      
        .filter(x => x.indexOf('l') == -1)
        .filter(x => x.indexOf('a') == -1)
        .filter(x => x.indexOf('r') == -1)

 
        .filter(x => x.indexOf('u') > -1)
        .filter(x => x.indexOf('u') != 1)
        .filter(x => x.indexOf('u') != 4)

        .filter(x => x.indexOf('n') > -1)
        .filter(x => x.indexOf('n') != 0)

        .filter(x => x.indexOf('s') > -1)
        .filter(x => x.indexOf('s') != 0)
        .filter(x => x.indexOf('s') != 2)

        .filter(x => x[1] == 'e')
        .filter(x => x[3] != 'e')
    
    console.log(asdfsdf.join(' | '));
});