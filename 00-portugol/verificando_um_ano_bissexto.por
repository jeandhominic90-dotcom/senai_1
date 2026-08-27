programa {
    funcao inicio() {
        inteiro ano

        escreva("Digite um ano: ")
        leia(ano)

        se ((ano % 4 == 0 e ano % 100 != 0) ou (ano % 400 == 0)) {
            escreva("O ano ", ano, " é bissexto.\n")
        } senao {
            escreva("O ano ", ano, " não é bissexto.\n")
        }
    }
}
