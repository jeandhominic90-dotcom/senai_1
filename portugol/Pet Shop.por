programa
{
funcao inicio()
{
real gramas, quilos, preco_total

escreva("Informe o peso da ração em gramas: ")
leia(gramas)

// Converte gramas para quilos
quilos = gramas / 1000
preco_total = quilos * 10.0

escreva("Preço total a pagar: R$ ", preco_total, ")
}
}
