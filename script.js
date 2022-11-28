const calcBtns = document.querySelector('#calcBtns')

function insert(key){
    let dsp = document.querySelector('#calcDisplay')
    let key1 = dsp.innerText
    if (key1 != 0){
        dsp.innerText = `${key1 + key}`
    } else {
        dsp.innerText = `${key}`
    }
}

addEventListener('mouseclick', insert)

function clean(){
    document.querySelector('#calcDisplay').innerText = "0"
}

function back(){
    let dsp = document.querySelector('#calcDisplay').innerText
    document.querySelector('#calcDisplay').innerText = dsp.substring(0, dsp.length - 1)
    console.log(dsp.length)
    if (dsp.length <= 1){
        document.querySelector('#calcDisplay').innerText = '0'
    }
}

function calc(){
    let dsp = document.querySelector('#calcDisplay').innerText
    
    if (document.querySelector('#calcDisplay').innerText != 0){
        document.querySelector('#calcDisplay').innerText = eval(dsp)
    } else {
        document.querySelector('#calcDisplay').innerText = `${'Erro'}`
    }
}