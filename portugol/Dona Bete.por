programa
{
	funcao inicio()
	{
		real faturamento, premiacoes, presentes, comissoes, lucro

		escreva("Informe o faturamento bruto: R$ ")
		leia(faturamento)

		escreva("Informe o valor pago em premiações: R$ ")
		leia(premiacoes)

		escreva("Informe o valor gasto em presentes: R$ ")
		leia(presentes)

		escreva("Informe o valor pago em comissões: R$ ")
		leia(comissoes)

		lucro = faturamento - (premiacoes + presentes + comissoes)

		escreva("\nLucro da Dona Bete: R$ ", lucro, "\n")
	}
}
