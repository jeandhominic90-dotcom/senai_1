function adicionar(){
    const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.push("Gill Bates")
    console.log(personagens);
    
}

function adicionar_no_inicio(){
    const personagens = ["Lúcio Fernando", "Mônica", "Capitão Ganso"];
    personagens.unshift("Dona Bete")

    console.log(personagens);
    
}

function remover_ultimo(){
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];
    personagens.pop()
    console.log(personagens);
}

function remover_primero() {
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];

    personagens.shift("Lúcio Fernando")
    console.log(personagens);
    
}

function remover_captao_ganso(){
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];

    let i = personagens.indexOf("Capitão Ganso")
   personagens.splice(i, 1)

   console.log(personagens);
   
    
}

function remover_Gill_betes_junin() {
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];

    let i = personagens.indexOf("Gill Bates")
    personagens.splice(i , 1)
     i = personagens.indexOf("Junin")
     personagens.splice(i , 1)


    console.log(personagens);
    
}

function adicionar_final(){
    const personagens = [
        "Peba",
        "Bilu",
        "Waldisney"
    ];

    personagens.push("Padre Ernan Buco")
    console.log(personagens);
    
    
}

function adicionar_inicio(){
    const personagens = [
        "Peba",
        "Bilu",
        "Waldisney"
    ];

    personagens.unshift("GENéZio" , "Kowalski")
    console.log(personagens);
    
}

function indicie_Waldisney(){
    const personagens = [
        "Peba",
        "Bilu",
        "Waldisney",
        "GENéZio"
    ];

    personagens.indexOf("Waldisney")
    console.log(personagens);
    
}

function verificar_se_esta_no_arrey(){
    const personagens = [
        "Peba",
        "Bilu",
        "Waldisney",
        "GENéZio"
    ];

    personagens.includes("Heitor Tuga")
    console.log(personagens);
    
}

function inverter_arreys(){
    const personagens = [
        "Lúcio Fernando",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates"
    ];

    personagens.reverse()
    console.log(personagens);
    
}

function remover_junin(){
    const personagens = [
        "Tião",
        "Junin",
        "Padre Ernan Buco"
    ];

    i = personagens.indexOf("Junin")
    personagens.splice(i , 1)

    console.log(personagens)
}

function adicionar_final_2(){
    const personagens = [
        "Tião",
        "Junin",
        "Padre Ernan Buco"
    ];


    personagens.push("Dona Bete")
    console.log(personagens);
    personagens.unshift("Mônica")
    console.log(personagens)
    
}

 function remover_primeiro_ultimo(){
    const personagens = [
        "Rivaldo Jesus",
        "Kowalski",
        "GENéZio",
        "Waldisney"
    ];

    personagens.pop()
    personagens.shift()

    console.log(personagens);
    

}

function indicie_GENéZio(){
    const personagens = [
        "Rivaldo Jesus",
        "Kowalski",
        "GENéZio",
        "Waldisney"
    ];
    personagens.indexOf("GENéZio")
    console.log(personagens);

}

function verificar_Capitão_Ganso() {
    const personagens = [
        "Rivaldo Jesus",
        "Kowalski",
        "GENéZio",
        "Waldisney"
    ];

    const contemCapitão_Ganso = personagens.includes("Capitão_Ganso")
    if(contemCapitão_Ganso  == true){
        console.log("estou aqui")
    }else{
        console.log("fui embora");
        
    }
   
}





function mostrarArreys(a){
    document.getElementById('resultado').innerHTML=""

    for(let i = 0; i<a.length; i++){
        document.getElementById('resultado').innerHTML += '<p>${a[i]}</p>'

    }

}