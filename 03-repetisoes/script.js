

// let contagem = 0
// while(contagem < 3){
//     alert(contagem)
//     contagem++
// }

// // let i = 0
// let qtd = 0
// let total = 0 
// let produto = -1
// while(produto != 0){
//     // produto = Number(prompt("Digite o preço do " + "produto"))
//     produto = Number(prompt("Digite o preço do " + (qtd+1) +  " o produto\n(0 para parar)"))
//     if(produto != 0) 
//     // total = total + produto
//     qtd ++
//     total += produto
//     // i++ 
// }
// alert('total total:' + total + '\nQuantidade:' + qtd)



let resultado = document.getElementById('resultado')

function ejercicio1(){
    // eje1
    resultado.innerHTML = 'parte 1, eje1 <br>' 
let i = 0
while(i<10){
    i++
    let quadrado = i*i
    console.log(i + ': ' + quadrado) 
    document.getElementById('resultado').innerHTML += i + ': ' + quadrado + '<br>'
    
}
}

function ejercicio2(){
    // eje2
    resultado.innerHTML = 'parte 1, eje2 <br>'
    let i = 10
    while (i >= 0) {
        resultado.innerHTML += i + '<br>'
        i--
    }
}

function ejercicio3(){
// eje3
resultado.innerHTML = 'parte 1, eje3 <br>'
let soma = 0
let i = 1
while(i <= 100){
    soma += i
    // resultado.innerHTML = i + ':' + soma + '<br>'
    i++
}
    
resultado.innerHTML = soma
}

function ejercicio4(){
   resultado.innerHTML= 'parte 1, eje4 <br>'
   let i = 1
   while(i <= 10){
    let tabuada = i * 5
    resultado.innerHTML += '5 X ' + i + ' = ' + tabuada + '<br>'
    i++

   }
}

function ejercicio5(){
let numero = Number(prompt("Digite o número para ver a tabuada:"));
    
    resultado.innerHTML = 'parte 1, eje5 <br>';
    let i = 1;
    
    while(i <= 10){
        let tabuada = i * numero;
        resultado.innerHTML += numero + ' X ' + i + ' = ' + tabuada + '<br>';
        i++;
    }
}

function ejercicio6(){
    resultado.innerHTML = 'parte 1, eje6 <br>';
    let i = 1;
    
    while(i <= 20){
        if(i % 2 !== 0){
            resultado.innerHTML += i + '<br>';
        }
        i++;
    }
}

function ejercicio7(){
    resultado.innerHTML = 'parte 1, eje7 <br>';
    
    // Ordem crescente
    resultado.innerHTML += '<b>Crescente:</b><br>';
    let i = 1;
    while(i <= 10){
        resultado.innerHTML += i + ' ';
        i++;
    }
    
    resultado.innerHTML += '<br><br>';
    
    // Ordem decrescente
    resultado.innerHTML += '<b>Decrescente:</b><br>';
    let j = 10;
    while(j >= 1){
        resultado.innerHTML += j + ' ';
        j--;
    }
}


function ejercicio8(){
    let numero = Number(prompt("Digite um número para calcular o fatorial:"));
    resultado.innerHTML = 'parte 1, eje8 <br>';
    
    let fatorial = 1;
    let i = numero;
    
    while(i > 1){
        fatorial *= i;
        i--;
    }
    
    resultado.innerHTML += 'O fatorial é: ' + fatorial;
}

function ejercicio9(){
    resultado.innerHTML = 'parte 1, eje9 <br>';
    let i = 1;
    
    while(i <= 100){
        if (i % 3 === 0 && i % 5 === 0) {
            resultado.innerHTML += 'FizzBuzz<br>';
        } else if (i % 3 === 0) {
            resultado.innerHTML += 'Fizz<br>';
        } else if (i % 5 === 0) {
            resultado.innerHTML += 'Buzz<br>';
        } else {
            resultado.innerHTML += i + '<br>';
        }
        i++;
    }
}

function ejercicio10(){
    resultado.innerHTML = 'parte 1, eje10 <br>';
    let i = 1;
    let soma = 0;
    
    while(i <= 10){
        soma += 1 / i;
        i++;
    }
    
    resultado.innerHTML += 'O valor total da série é: ' + soma.toFixed(2);
}


function ejercicio11(){
    let limite = parseInt(prompt("Digite um número limite:"));
    resultado.innerHTML = 'parte 1, eje11 <br>';
    
    let i = 1;
    let pares = 0;
    let impares = 0;
    
    while(i <= limite){
        if(i % 2 === 0){
            pares++;
        } else {
            impares++;
        }
        i++;
    }
    
    resultado.innerHTML += 'Total de pares: ' + pares + '<br>';
    resultado.innerHTML += 'Total de ímpares: ' + impares;
}

function ejercicio12(){
    // Exemplo com uma lista fixa de números
    let lista = [15, 8, 42, 4, 23, 16];
    resultado.innerHTML = 'parte 1, eje12 <br>';
    
    let i = 0;
    let maior = lista[0];
    let menor = lista[0];
    
    while(i < lista.length){
        if(lista[i] > maior){
            maior = lista[i];
        }
        if(lista[i] < menor){
            menor = lista[i];
        }
        i++;
    }
    
    resultado.innerHTML += 'Lista: ' + lista.join(', ') + '<br>';
    resultado.innerHTML += 'Maior valor: ' + maior + '<br>';
    resultado.innerHTML += 'Menor valor: ' + menor;
}


function ejercicio13(){
    let lista = [10, 20, 30, 40, 50];
    resultado.innerHTML = 'parte 1, eje13 <br>';
    
    let i = 0;
    let soma = 0;
    
    while(i < lista.length){
        soma += lista[i];
        i++;
    }
    
    let media = soma / lista.length;
    resultado.innerHTML += 'Lista: ' + lista.join(', ') + '<br>';
    resultado.innerHTML += 'A média é: ' + media;
}

function ejercicio14(){
    let numero = parseInt(prompt("Digite um número para verificar se é primo:"));
    resultado.innerHTML = 'parte 1, eje14 <br>';
    
    let i = 1;
    let divisores = 0;
    
    while(i <= numero){
        if(numero % i === 0){
            divisores++;
        }
        i++;
    }
    
    if(divisores === 2){
        resultado.innerHTML += numero + ' é um número primo!';
    } else {
        resultado.innerHTML += numero + ' NÃO é um número primo.';
    }
}

function ejercicio15(){
    resultado.innerHTML = 'parte 1, eje15 <br>';
    let num = 1;
    
    while(num <= 50){
        let divisores = 0;
        let i = 1;
        
        while(i <= num){
            if(num % i === 0){
                divisores++;
            }
            i++;
        }
        
        if(divisores === 2){
            resultado.innerHTML += num + ' ';
        }
        num++;
    }
}