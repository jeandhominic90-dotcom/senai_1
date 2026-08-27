programa {
  funcao inicio() {
    // infos e dados
    inteiro n1, n2
    real resultado
    // + - * /
    cadeia operacao
    // entrada de dados
    escreva("#1: ")
    leia(n1)
    // escreva("(+ - * /) :")
    escreva("Operação: ")
    leia(operacao)
    escreva("#2: ")
    leia(n2)

    se(operacao == "+"){
      resultado = n1 + n2
    }
    se(operacao == "-"){
      resultado = n1 - n2
    }
    se(operacao == "*"){
      resultado = n1 * n2
    }
    se(operacao == "/"){
      resultado = n1 / n2
    }

    // saída
    // escreva("Resultado: " + resultado)
    // 7*2=14
    escreva(n1)
    escreva(operacao)
    escreva(n2)
    escreva("=")
    escreva(resultado)


  }
}
