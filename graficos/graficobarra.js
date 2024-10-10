import { pegarCSS, configuraEixo } from "./comum.js"

async function criarGraficoBarra(){
    const url = 'https://raw.githubusercontent.com/vini-destruidor19/API-ex-vini/refs/heads/main/Barra.json'
    const res = await fetch(url)
    const dados = await res.json()
    const celulares = Object.keys(dados)
    const vendas = Object.values(dados)


    const data = [
        {
            x: celulares,
            y: vendas,
            type:'bar',
            marker: {
                color: pegarCSS('--vermelho')
            }
        }
    ]
    const layout = {
        plot_bgcolor: pegarCSS('--preto'),
        paper_bgcolor: pegarCSS('--preto'),
        title:{
            text:'os celulares mais vendido no mundo',
            font: {
                color: pegarCSS('--branco'),
                family: pegarCSS('--fonte-titulo'),
                size: 50
            }
        },
        xaxis:{
            tickfont: configuraEixo,
            tickangule: 0
        },
        yaxis:{
            tickfont: configuraEixo,
            tickangule: 45
        }
    }
    

    const grafico = document.createElement('div')
    grafico.className = "grafico"
    document.getElementById('caixa-grafico').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}


criarGraficoBarra()