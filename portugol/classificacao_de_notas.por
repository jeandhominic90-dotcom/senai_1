programa {
    funcao inicio() {
        real nota

        escreva("Digite sua nota (0 a 100): ")
        leia(nota)

        se (nota >= 81 e nota <= 100) {
            escreva("Classificação: A\n")
        } senao se (nota >= 61) {
            escreva("Classificação: B\n")
        } senao se (nota >= 41) {
            escreva("Classificação: C\n")
        } senao se (nota >= 21) {
            escreva("Classificação: D\n")
        } senao {
            escreva("Classificação: E\n")
        }
    }
}
