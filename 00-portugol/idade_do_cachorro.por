programa {
    funcao inicio() {
        inteiro idadeCachorro, idadeHumana

        escreva("Digite a idade do seu cachorro: ")
        leia(idadeCachorro)

        idadeHumana = idadeCachorro * 7
        escreva("A idade do cachorro em anos humanos é: ", idadeHumana, "\n")

        se (idadeHumana >= 60) {
            escreva("O doguinho já pode se aposentar por idade! :D\n")
        } senao {
            escreva("O cachorro ainda precisa esperar para se aposentar.\n")
        }
    }
}
