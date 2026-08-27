programa {
    inclua biblioteca Texto --> t

    funcao inicio() {
        cadeia mes

        escreva("Digite o nome de um mês: ")
        leia(mes)

        mes = t.caixa_baixa(mes)

        se (mes == "fevereiro") {
            escreva("O mês de ", mes, " tem 28 ou 29 dias.\n")
        } senao se (mes == "abril" ou mes == "junho" ou mes == "setembro" ou mes == "novembro") {
            escreva("O mês de ", mes, " tem 30 dias.\n")
        } senao {
            escreva("O mês de ", mes, " tem 31 dias.\n")
        }
    }
}
