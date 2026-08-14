programa
{
funcao inicio()
{
real valor_pago, preco_venda

escreva("Informe quanto pagou na obra de arte: R$ ")
leia(valor_pago)

// 200% de lucro significa somar o valor original + 200% (ou seja, multiplicar por 3)
preco_venda = valor_pago + (valor_pago * 2)

escreva("\nPreço de venda recomendado: R$ ", preco_venda, "\n")
}
}
