

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
