programa {
    funcao inicio() {
        inteiro idade

        escreva("Digite a sua idade: ")
        leia(idade)

        se (idade >= 16) {
            escreva("Você pode votar.\n")
        } senao {
            escreva("Você ainda não pode votar.\n")
        }
    }
}
