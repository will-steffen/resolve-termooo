const fs = require('fs');

var inputFileName = 'palavras.txt';
var outputFileName = '5-letters-palavras.txt';


fs.readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    var arr = data.split('\r\n');
    var outPutArray = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i].length == 5){
            var palavra = normalizarPalavra(arr[i]);
            if(palavra.length == 5){
                outPutArray.push(palavra);
            }
        }
    }
    var outputdata  = outPutArray.join('\n');
    fs.writeFile(outputFileName, outputdata, (err) => {
        if (err) throw err;
      console.log('O arquivo foi criado!');
    });
});

var config = [
    ['ú' , 'u'] ,
    ['í' , 'i'],
    ['ó' , 'o'],
    ['á' , 'a'],
    ['é' , 'e'],
    ['ã' , 'a'],
    ['ç' , 'c'],
    ['ô' , 'o'],
    ['ê' , 'e'],
    ['õ' , 'o'],
    ['â' , 'a'],
    ['\n' , ''],
 ];


function normalizarPalavra(palavra){
    palavra = palavra.toLowerCase();
    for(let i = 0 ; i < config.length ; i++ ){
        palavra = palavra.replaceAll(config[i][0],config[i][1] );
    }
    return palavra;
}


String.prototype.replaceAll = function(a ,b){
    var s = this;
    while(s.indexOf(a) > -1 ){
        s = s.replace (a , b);
    }
    return s;
}