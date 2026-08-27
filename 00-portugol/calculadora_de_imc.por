programa {
    funcao inicio() {
        real peso, altura, imc

        escreva("Digite o seu peso (kg): ")
        leia(peso)
        escreva("Digite a sua altura (m): ")
        leia(altura)

        imc = peso / (altura * altura)
        escreva("Seu IMC é: ", imc, "\n")

        se (imc < 25) {
            escreva("O IMC está abaixo de 25.\n")
        } senao {
            escreva("O IMC é 25 ou superior.\n")
        }
    }
}
