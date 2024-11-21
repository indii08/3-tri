import { getCSS } from "./common.js"
async function quantidadeUsuarios() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.jso"
    const res = await fetch(url)
    const dados = await res.json()
    
    console.log(dados)
    }
    
    quantidadeUsuarios()
    const data = [
        {
        
        x: nomeDasRedes,
        y: quantidadeUsuarios,
        type: "bar",
        maker:{
            color: getCSS("--primary-color")
        }
        }
        
        ]
        
    
        const grafico = document.createElement("div")
        grafico.className = "grafico"
        
        document.getElementById('graficos-container').appendChild(grafico)
        Plotly.newPlot(grafico, data, layout)
        const layout = {

            plot_bgcolor: getCSS('--bg-color'),
            paper_bgcolor: getCSS('--bg-color'),
            title: {
                text: 'Redes sociais com mais usuários no mundo',
                x: 0,
font: {
color: getCSS('--primary-color'),
family: getCSS('--font'),
size: 30
},
xaxis: {
    tickfont: tickConfig,
    title: {
        text: 'nome das redes sociais',
        font: {
        color: getCSS('--secundary-color'),
        size: 16,
family: getCSS('--font')

},
title: {
        }
},
yaxis: {
    tickfont: tickConfig,
    title: {
        text: 'bilhões de usuários ativos',
        font: {
        color: getCSS('--secundary-color')
}
}

}
     }
            
        }
            }