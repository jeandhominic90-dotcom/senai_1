programa
{
funcao inicio()
{
inteiro caracteres, total_tokens
real custo_token, preco_reais

escreva("Informe o número de caracteres do prompt: ")
leia(caracteres)

escreva("Informe o custo por token em reais: R$ ")
leia(custo_token)

total_tokens = 5 + caracteres
preco_reais = total_tokens * custo_token

escreva("Total de tokens gastos: ", total_tokens)
escreva("Custo em Reais: R$ ", preco_reais,)
}
}
