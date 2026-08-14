programa
{
	funcao inicio()
	{
		real salario, moradia, agua, luz, internet, gasolina, streamings, telefone, outros
		real total_contas, sobra

		escreva("Digite o valor do seu salário: R$ ")
		leia(salario)

		escreva("Gasto com moradia: R$ ")
		leia(moradia)
		escreva("Gasto com água: R$ ")
		leia(agua)
		escreva("Gasto com luz: R$ ")
		leia(luz)
		escreva("Gasto com internet: R$ ")
		leia(internet)
		escreva("Gasto com gasolina: R$ ")
		leia(gasolina)
		escreva("Gasto com streamings: R$ ")
		leia(streamings)
		escreva("Gasto com telefone: R$ ")
		leia(telefone)
		escreva("Outros gastos: R$ ")
		leia(outros)

		total_contas = moradia + agua + luz + internet + gasolina + streamings + telefone + outros
		sobra = salario - total_contas

		
		escreva("\n Meno Juca, aqui está seu resultado com carinho <3")
		escreva("\n Sobrou para você guardar: R$ ", sobra)
		
	}
}
