const fs = require('fs');

var inputFileName = '5-letters.txt';

const pontos = {
    a : 5000,
    e : 4000,
    i : 2500,
    o : 3000,
    u : 2000,
    b : 1000,
    c : 1000,
    d : 1000,
    f : 1000,
    g : 1000,
    h : 1000,
    j : 1000,
    k : 1000,
    l : 1500,
    m : 1500,
    n : 1000,
    p : 1000,
    q : 1000,
    r : 2000,
    s : 2000,
    t : 1200,
    v : 1000,
    w : 1000,
    x : 1000,
    y : 1000,
    z : 1100,
}

fs.readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    var arrayDePalavra = data.split('\r\n');
    arrayDePalavra = encontrarPalavras(arrayDePalavra);

    console.log(selecionarPalavra(arrayDePalavra));
});

function selecionarPalavra(arrayDePalavra) {
    let palavraSelecionada = '' ;
    let pontucaoPalavraSelecionada = 0 ;
    for(let i = 0 ; i < arrayDePalavra.length; i++){
        
        if(arrayDePalavra[i] == 'colon' ){
            let x = 0;
        }
        
        let pontucaoPalavra = 0;
        let letras = [];
        for(let j = 0; j < arrayDePalavra[i].length ; j++){
            let letra = arrayDePalavra[i][j];
            if(letras.indexOf(letra) == -1 ){
                letras.push(letra);
                let pontucao = pontos[letra];
                pontucaoPalavra = pontucao + pontucaoPalavra;
            }
            
        }
        
        if(pontucaoPalavraSelecionada < pontucaoPalavra ){
            palavraSelecionada = arrayDePalavra[i];
            pontucaoPalavraSelecionada = pontucaoPalavra;
        }
    }
    console.log(pontucaoPalavraSelecionada)
    return  palavraSelecionada;

}



function encontrarPalavras(arrayDePalavra){ // 
    return arrayDePalavra 


        .filter(x => x[3] == 'o')
        .filter(x => x[1] == 'o')
        .filter(x => x[4] == 'n')
        .filter(x => x[0] == 'c')
        .filter(x => x.indexOf('a') == -1)
        .filter(x => x.indexOf('p') == -1)
        .filter(x => x.indexOf('e') == -1)
        .filter(x => x.indexOf('i') == -1)
        .filter(x => x.indexOf('m') == -1)
        .filter(x => x.indexOf('u') == -1)
        .filter(x => x.indexOf('r') == -1)
        .filter(x => x.indexOf('s') == -1)
        .filter(x => x.indexOf('f') == -1)
        .filter(x => x.indexOf('t') == -1)
        .filter(x => x.indexOf('d') == -1)

        // .filter(x => x.indexOf('c') == -1)
        // .filter(x => x[4] == 'a')
        // .filter(x => x[3] == 'i')
        // .filter(x => x.count('a') == 1)
        // .filter(x => x.indexOf('e') == -1)
        // .filter(x => x.indexOf('d') == -1)
        // .filter(x => x[0] == 'm')
        // .filter(x => x.indexOf('o') == -1)
        // .filter(x => x.indexOf('v') == -1)
        // .filter(x => x[1] == 'u')
        // .filter(x => x.indexOf('g') == -1)
        // .filter(x => x.indexOf('n') == -1)
    ;
}



String.prototype.count = function(a){
    var s = this;
    var c = 0 ;
   for(let i = 0 ; i < s.length ; i++){
        if(s[i] == a ){
            c++;
        }
    }
    return c;
}

// var asdfsdf = arrayDePalavra
//         .filter(x => x.indexOf('m') == -1)
//         .filter(x => x.indexOf('i') == -1)
//         .filter(x => x.indexOf('t') == -1)
//         .filter(x => x.indexOf('o') == -1)
      
//         .filter(x => x.indexOf('l') == -1)
//         .filter(x => x.indexOf('a') == -1)
//         .filter(x => x.indexOf('r') == -1)

 
//         .filter(x => x.indexOf('u') > -1)
//         .filter(x => x.indexOf('u') != 1)
//         .filter(x => x.indexOf('u') != 4)

//         .filter(x => x.indexOf('n') > -1)
//         .filter(x => x.indexOf('n') != 0)

//         .filter(x => x.indexOf('s') > -1)
//         .filter(x => x.indexOf('s') != 0)
//         .filter(x => x.indexOf('s') != 2)

//         .filter(x => x[1] == 'e')
//         .filter(x => x[3] != 'e')