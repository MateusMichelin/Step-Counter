
function checar(){


var comeco = window.document.getElementById('start')
var fim = window.document.getElementById('end')
var passos = window.document.getElementById('walks')
var res = window.document.getElementById('res_text')

var inicio = Number(comeco.value)
var final = Number(fim.value)
var walk = Number(passos.value)
var resultado = ''
var emoji_seta = '➜'
var emoji_final = '🏁'


if(inicio == 0){

        resultado = 'impossível contar, o iníco não foi definido!'
        res.style.color = 'red'
        res.innerHTML = ` ${resultado} `

    }else if (inicio >= 1){

        for(var i = inicio; i <= final; i+= walk){

            res.style.color = 'black'
            res.style.font = 'normal'

            if (walk == 0){
        
                window.alert('Passo com valor nulo registrado, considerando valor 1! ')
                walk = 1;
            }
            
            resultado += `${emoji_seta} ${i}  `
            res.innerHTML = ` ${resultado} Fim${emoji_final}! `
        }
    } 
}