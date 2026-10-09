function criar_vetor_50(){
    let numeros = []
    for(let i = 0 ; i<50; i++){
        let n = Math.floor(Math.random()*201)-100
        numeros.push(n)
    }

    console.log(numeros);
    
    
}