const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputFileName = '5-letters.txt';

let Resultado = {
    Inexistente: 0,
    LugarErrado: 1, 
    LugarCerto:  2,
}

class Letra{
    constructor(caractere,resultado){
        this.caractere = caractere;
        this.resultado = resultado;

    }
}

class Palavra{
    constructor(letras){
        this.letras = letras;
        
    }
}

let palavras = [
    // new Palavra([
    //     new Letra('m',Resultado.Inexistente), 
    //     new Letra('e',Resultado.Inexistente),
    //     new Letra('i',Resultado.Inexistente),
    //     new Letra('a',Resultado.LugarCerto),
    //     new Letra('o',Resultado.LugarErrado),
    // ]),
    // new Palavra([
    //     new Letra('o',Resultado.LugarErrado), 
    //     new Letra('u',Resultado.Inexistente),
    //     new Letra('s',Resultado.Inexistente),
    //     new Letra('a',Resultado.LugarCerto),
    //     new Letra('r',Resultado.LugarCerto),
    // ]),
];

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

let arrayDePalavra;
let palavrasInexistente = [];
//termo 
//20210

function exec(){
    arrayDePalavra = encontrarPalavras(arrayDePalavra);
    let palavraSugerida = selecionarPalavra(arrayDePalavra);
    if(arrayDePalavra.length == 1){
        console.log('A palavra encontrada é:' + palavraSugerida);
        console.log();
        readline.close();
    }else{
        console.log('A palavra sugerida é:' + palavraSugerida);
        readline.question('Qual o resultado ?', resultado => {
         
            if(resultado != 'exit' ){
                if(resultado == '0'){
                    console.log('Registrado PalavraInexistente !')
                    palavrasInexistente.push(palavraSugerida);
                }
                else{
                    let palavra = new Palavra([
                        new Letra(palavraSugerida [0] ,resultado[0]), 
                        new Letra(palavraSugerida [1] ,resultado[1]), 
                        new Letra(palavraSugerida [2] ,resultado[2]), 
                        new Letra(palavraSugerida [3] ,resultado[3]), 
                        new Letra(palavraSugerida [4] ,resultado[4]), 
                    ]);
                    palavras.push(palavra);
                }
                exec();
            }else{
                readline.close();
            }
        });
    }
    
}

fs.readFile(inputFileName, 'utf-8', (err, data) => {
    if (err) throw err;
    arrayDePalavra = data.split('\r\n');
    exec();
});

function selecionarPalavra(arrayDePalavra) {
    let palavraSelecionada = '' ;
    let pontucaoPalavraSelecionada = 0 ;
    for(let i = 0 ; i < arrayDePalavra.length; i++){
            
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



function encontrarPalavras(arrayDePalavra){  
    for(let j = 0 ; j< palavras.length ; j++){
        for(let i = 0 ; i < palavras[j].letras.length ; i++){
            let letra = palavras[j].letras[i];
            if(letra.resultado == Resultado.LugarCerto){
                arrayDePalavra = arrayDePalavra.filter(x => x[i] == letra.caractere);
            }

            if(letra.resultado == Resultado.LugarErrado){
                arrayDePalavra = arrayDePalavra.filter(x => x.indexOf(letra.caractere) > -1);
                arrayDePalavra = arrayDePalavra.filter(x => x[i] != letra.caractere);
            }

            if(letra.resultado == Resultado.Inexistente){
                arrayDePalavra = arrayDePalavra.filter(x => x.indexOf(letra.caractere) == -1);
            }

        }
    }

    arrayDePalavra = arrayDePalavra.filter(x => palavrasInexistente.indexOf(x) == -1);
    return arrayDePalavra 
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
        