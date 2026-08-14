programa
{
funcao inicio()
{
real horas_estimadas, preco_cobrado, lucro

escreva("Informe a quantidade estimada de horas: ")
leia(horas_estimadas)

// Cobra os R$ 500 da consultoria + R$ 350 por hora
preco_cobrado = 500.0 + (horas_estimadas * 350.0)

// Como R$ 500 vai direto para o consultor Denis Nery, o lucro do Junin é o valor do seu trabalho
lucro = horas_estimadas * 350.0

escreva("\nPreço a cobrar do cliente: R$ ", preco_cobrado)
escreva("\nLucro líquido do Junin: R$ ", lucro, "\n")
}
}
