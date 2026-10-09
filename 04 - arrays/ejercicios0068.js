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

function remover_dois_primeiros(){
    const personagens = [
        "Bilu",
        "Mônica",
        "Gill Bates",
        "Junin",
        "Peba"
    ];

    let i = personagens.indexOf("Bilu")
    personagens.splice(i , 1)
    i = personagens.indexOf("Mônica")
    personagens.splice(i , 1)

    console.log(personagens);
    
}

function remover_os_trez_primeiros(){
    const personagens = [
        "Bilu",
        "Mônica",
        "Gill Bates",
        "Junin",
        "Peba"
    ]    

let i =  personagens.indexOf("Gill Bates")
personagens.splice(i , 1)
i = personagens.indexOf("Junin")
personagens.splice(i, 1)
i = personagens.indexOf("Peba")
personagens.splice(i, 1)
console.log(personagens);



}

function adicionar_inicio_final(){
    const personagens = [
        "Capitão Ganso",
        "Heitor Tuga",
        "Dona Bete"
    ];

    personagens.push("Gill Bates")
    console.log(personagens);
    personagens.unshift("Lúcio Fernando")
    console.log(personagens)
}

function inverter_arreys2(){
    const personagens = [
        "Capitão Ganso",
        "Heitor Tuga",
        "Dona Bete",
        "Gill Bates"
    ];

    personagens.reverse()
    console.log(personagens);
}

function descubrir_se_bilu(){
    const personagens = [
        "Padre Ernan Buco",
        "GENéZio",
        "Bilu",
        "Junin"
    ];

    const contemBilu= personagens.includes("Bilu")
    if(contemBilu  == true){
        console.log("estou aqui")
    }else{
        console.log("fui embora");
        
    }
}

function descubrir_o_indice(){
    const personagens = [
        "Padre Ernan Buco",
        "GENéZio",
        "Bilu",
        "Junin"
    ];

    personagens.indexOf("Padre Ernan Buco")
    console.log(personagens);
    
}

function remover_dois(){
    const personagens = [
        "Lúcio Fernando",
        "Rivaldo Jesus",
        "Mônica",
        "Capitão Ganso",
        "Gill Bates",
        "Junin"
    ];

    let i =  personagens.indexOf("Mônica")
    i = personagens.splice(i,1)
    i =  personagens.indexOf("Capitão Ganso")
    i = personagens.splice(i , 1)
    console.log(personagens);


}

function adicionar_Bilu_final_Dona_Bete_ini_remover_ultimo_inverter(){
    const personagens = [
        "Tião",
        "Peba",
        "Waldisney"
    ];    

    personagens.push("Bilu")
    console.log('1: '+ personagens);
    
    personagens.unshift("Dona Bete")
    console.log('2: '+ personagens);

    // let i = personagens.indexOf("Waldisney")
    let i = personagens.length - 1
    personagens.splice(i,1)
    console.log('3: '+ personagens)

    personagens.reverse()
    console.log('4: '+ personagens)


}

function adicionar_Kowalski_idice_Padre_Ernan_Buco_Remova_GENéZio_iverter(){
    const personagens = [
        "Gill Bates",
        "Kowalski",
        "GENéZio",
        "Padre Ernan Buco",
        "Heitor Tuga"
    ];

    const contemKowalski= personagens.includes("Kowalski")
    if(contemKowalski  == true){
        console.log("estou aqui")
    }else{
        console.log("fui embora");
        
    }

    console.log("posocisao do padre", personagens.indexOf("Padre Ernan Buco"))
    // console.log(personagens);
    

   let i = personagens.indexOf("GENéZio")    
   i = personagens.splice(i,1)
   console.log(personagens);
   

   personagens.reverse()
   console.log(personagens);
   
}

function mostrarArreys(a){
    document.getElementById('resultado').innerHTML=""

    for(let i = 0; i<a.length; i++){
        document.getElementById('resultado').innerHTML += '<p>${a[i]}</p>'

    }

}