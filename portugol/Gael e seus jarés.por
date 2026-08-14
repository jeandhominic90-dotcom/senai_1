programa
{
funcao inicio()
{
inteiro caminhoes, total_jares
real custo_transporte, faturamento, lucro

escreva("Informe o número de caminhões: ")
leia(caminhoes)

total_jares = caminhoes * 50
faturamento = total_jares * 90.0
custo_transporte = caminhoes * 450.0

lucro = faturamento - custo_transporte

escreva("\nLucro da temporada de vendas: R$ ", lucro, "\n")
}
}
