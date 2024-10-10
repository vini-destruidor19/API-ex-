import { pegarCss } from "./comum.js"

async function criargraficoTancredo() {
    const url = "https://raw.githubusercontent.com/GabzinhoHD/Banco-de-dados-EX/refs/heads/main/Tancredo.json"
    const res = await fetch(url)
    const dados = await res.json()
    const BebidasVotadas = dados.slice(1).map( bebidas => bebidas[2] )
    const Contagem = BebidasVotadas.reduce((acc, BebidasVotadas ) => {
        acc[BebidasVotadas] = (acc[BebidasVotadas] || 0) + 1
        return acc
    },{})
    console.log(Contagem)
    const valores = Object.values(Contagem)
    const etiqueta = Object.keys(Contagem)
    const data = [
        {
            values: valores,
            labels: etiqueta,
            type:"pie",
            textinfo: "label + percent",
        }
    ]
    const layout = {
        plot_bgcolor: pegarCss('--azul-escuro'),
        paper_bgcolor: pegarCss('--laranja'),
        font:{
            color: pegarCss("--azul-escuro"),
            family: pegarCss("--fonte-texto"),
            size: 15
        }
    }

    const pesquisaTitulo = document.createElement("h3")
    pesquisaTitulo.classList.add("caixa-grafico__texto")
    pesquisaTitulo.innerHTML = `As bebidas mais votadas no Colegio <span>Tancredo</span>`
    const grafico = document.createElement("div")
    grafico.className = "grafico"
    document.getElementById("caixa-grafico").appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
    }
    Plotly.newPlot(grafico, data, layout, config)

    const caixa = document.getElementById("caixa-grafico")
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("caixa-grafico__texto")
    paragrafo.innerHTML = `Observa-se que a bebida mais votada no <span>colégio</span> é diferente da mais votada no mundo. A <span>água</span> no mundo foi a mais votada, em comparação no colégio foi o <span>refrigerante</span>, já a <span>água ficou em quarto lugar</span> aatrás dos sucos de laranja e uva.`
    caixa.appendChild(paragrafo)
}

criargraficoTancredo()
