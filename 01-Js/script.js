// alert(" Eu sou o script no arquivo .js ")

//problema exemplo: ler duas duas e calcular a média

// infos  e variáveis
// let nota1, nota2
// let media
// // ler dados
//  nota1 = Number(prompt('Digite a primera nota:'))// lido e armazenamento com texto  
//  nota1 = Number(nota1) // converter texto para Número

//  nota2 = Number(prompt('Digite a segunda nota nota:')) // lê, coverte para Número e armazena
// //processamento
// media = (nota1 + nota2) / 2
// //saida
// alert("Média: " + media)

/*

// real nota1 = 2.1
float nota1 = 2.1
int contagem = 1
string nome = "josé miguel"
*/





  function Calcularpontos(){
    let vitorias, empates
    let pontos

    //enrada de dados
    vitorias = Number(prompt("Digite o número de vitorias: "))
    vitorias = Number(prompt("Digite o número de empates: "))

    // processamento
    pontos = vitorias*3 + empates

    //saida
    alert('Pontos do seu time: ' + pontos)
  }

    

    function calcular_numero_pesosoas_churasco(){
   
    let pessoas 
    let carne , cerveja , agua, refri

    // entrada de dados
    pessoas = Number(prompt("Digite o numero de pessoa que vão ao churrasco:"))

    // processamento
    carne = pessoas*0.5
    cerveja = pessoas*1
    agua = pessoas*0.5
    refri =  pessoas*0.2

    // saida
    alert('quantidade de pessoa: ' + pessoas + '\nquantidade de carne: ' + carne + 'kg\nqunatidade de cerveja: ' + cerveja + 'l\nquantidade de agua: ' + agua +'l\nqunatidade de refri: ' + refri + 'l' )
}


function demonstrar(){
    let numero = Number(prompt("Digite um número que vou adivinhar qual é"))

    alert("Eu falei que ia adivinahr, seu número é " + numero)
}
    

    
    