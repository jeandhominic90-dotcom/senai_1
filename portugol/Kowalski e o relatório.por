programa
{
funcao inicio()
{
// Dados crus informados no enunciado
inteiro relatorios_pf = 40
inteiro relatorios_pj = 33
real tempo_pf = 12.0
real tempo_pj = 42.0
real valor_pf = 2350.0
real valor_pj = 8900.0

// Cálculos agregados
inteiro total_relatorios = relatorios_pf + relatorios_pj
real tempo_total = tempo_pf + tempo_pj
real valor_total = valor_pf + valor_pj

// Média de valor por relatório
real media_valor_pf = valor_pf / relatorios_pf
real media_valor_pj = valor_pj / relatorios_pj

// Média de tempo por relatório (em horas)
real media_tempo_pf = tempo_pf / relatorios_pf
real media_tempo_pj = tempo_pj / relatorios_pj

// Exibição bonita do relatório

escreva(" RELATÓRIO DE RELATÓRIOS DO KOWALSKI ")

escreva("DADOS CRUS:")
escreva(" - PF: ", relatorios_pf, " relatórios | ", tempo_pf, " horas | R$ ", valor_pf, "\n")
escreva(" - PJ: ", relatorios_pj, " relatórios | ", tempo_pj, " horas | R$ ", valor_pj, "\n")

		escreva("MÉTRICAS GERAIS:")
    		escreva(" - Quantidade total de relatórios: ", total_relatorios, "\n")
        escreva(" - Tempo total trabalhado: ", tempo_total, " horas\n")
escreva(" - Valor total recebido: R$ ", valor_total, )

escreva("MÉDIAS POR RELATÓRIO:")
escreva(" - Valor médio recebido (PF): R$ ", media_valor_pf, "")
escreva(" - Valor médio recebido (PJ): R$ ", media_valor_pj, "")
escreva(" - Tempo médio gasto (PF): ", media_tempo_pf, " horas")
escreva(" - Tempo médio gasto (PJ): ", media_tempo_pj, " horas")

}
}
