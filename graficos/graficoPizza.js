import{ pegarCSS } from "./comum.js"

async function criarGraficoPizza(){
    const url = 'https://raw.githubusercontent.com/vini-destruidor19/API-ex-vini/refs/heads/main/Barra.json
    const res = await fetch(url)
    const dados = await res.json()
    const celulares = Object.keys(dados)
    const vendas = Object.values(dados)


    const data = [
        {
            keys: celulares,
            values: vendas,
            type:'pie',
            textinfo: 'label + percent'
        }
    ]
    const layout = {
        height: 400,
        width: 600,
        plot_bgcolor: pegarCSS('--branco'),
        paper_bgcolor: pegarCSS('--vermelho'),
        
    }
    const Titulos = document.createElement('h3')
    Titulos.classList.add("caixa-grafico__titulo")
    Titulos.innerHTML = `Os <span>Celulares</span> mais vendidos`

    const grafico =document.createElement("div")
    grafico.className = "grafico-disco"
    document.getElementById("caixa-grafico").appendChild(Titulos)
    document.getElementById("caixa-grafico").appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
criarGraficoPizza()