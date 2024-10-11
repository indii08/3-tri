const url = ‘https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json’
console.log(url);
async function
visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json()
    console.log(dados.tempo_medio);
    const paragrafo = document.createElement(‘p’)
paragrafo.classList.add(‘graficos-container__texto’)
paragrafo.innerHTML = `Você sabia que o mundo tem
${dados.total_pessoas_mundo} de pessoas e
que aproximadamente ${dados.total_pessoas_conectadas}
estão conectadas em alguma rede social e passam em média
${dados.tempo_medio} horas conectadas.`
console.log(paragrafo)
        console.log(dados)}
            visualizarInformacoesGlobais()
            {
                “total_pessoas_conectadas”: 5.04e9,
                “tempo_medio”: 2.38,
                “total_pessoas_mundo”: 7.888e9
                }