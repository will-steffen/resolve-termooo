const fs = require('fs');

var inputFileName = '5-letters-palavras.txt';

var letters = [
    'a', 'b', 'c', 'd', 'e', 
    'f', 'g', 'h', 'i', 'j', 
    'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 
    'z'];

fs.readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    var arrayDePalavra = data.split('\r\n');
    var outPutArray = [];
    for(let i = 0; i < arrayDePalavra.length; i++)
    {
        for(let j = 0; j < arrayDePalavra[i].length; j++)
        {
            if(letters.indexOf(arrayDePalavra[i][j]) == -1 && outPutArray.indexOf(arrayDePalavra[i][j]) == -1)
            {
                outPutArray.push(arrayDePalavra[i][j]);
            }
        }
    }
    if(outPutArray.length == 0 || (outPutArray.length == 1 &&  outPutArray[0] == '\n'))
    {
        console.log("Tá vazio!");
    }
    else
    {
        console.log(outPutArray.join(', '));
    }
    
});