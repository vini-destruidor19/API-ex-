import { pegarCSS } from "./comum.js"

async function criargraficoTancredo() {
    const url = "https://raw.githubusercontent.com/vini-destruidor19/API-ex-vini/refs/heads/main/qualquer%20coisa.json"
    const res = await fetch(url)
    const dados = await res.json()
    const celularesVotados = dados.slice(1).map( celulares => celulares[2] )
    const Contagem = celularesVotados.reduce((acc, celularesVotados ) => {
        acc[celularesVotados] = (acc[celularesVotados] || 0) + 1 
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
        plot_bgcolor: pegarCSS('--preto'),
        paper_bgcolor: pegarCSS('--preto'),
        font:{
            color: pegarCSS("--branco"),
            family: pegarCSS("--fonte-texto"),
            size: 15
        }
    }

    const pesquisaTitulo = document.createElement("h3")
    pesquisaTitulo.classList.add("caixa-grafico__texto")
    pesquisaTitulo.innerHTML = `Os celuares mais votados no Colegio <span>Tancredo</span>`
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
    paragrafo.innerHTML = `Observa-se que o celular mais votado no <span>colégio</span> é diferente da mais votado no mundo. A <span>Apple iPhone 14</span> no mundo foi o mais votado, em comparação no colégio foi o <span>outros celulares</span>, já a <span>Apple iPhone 14 ficou em quarto lugar</span> a atrás dos Samsung Galaxy S23 e Oppo Find X5.`
    caixa.appendChild(paragrafo)
}

criargraficoTancredo()