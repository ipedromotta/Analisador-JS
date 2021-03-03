let num = document.querySelector('#num')
let tab = document.querySelector('#tab')
let res = document.querySelector('#res')
let lista = []


function isNumero(n){
    if(n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.includes(n)){
        return true
    }else{
        return false
    }
}

function adicionar(){
    let n = Number(num.value)
    if(isNumero(n) && !inLista(n, lista)){
        lista.push(n)
        item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        item.value = `r${n}`
        tab.appendChild(item)
    }else{
        alert('Valor já adicionado ou não está entre 1 e 100.')
    }
    res.innerHTML = ''
    num.value = ''
    num.focus()
}

function finalizar(){
    let maior = lista[0]
    let menor = lista[0]
    let soma = 0
    let tot = 0

    if(lista.length == 0){
        alert('Adicione algum valor antes de finalizar')
        return
    }

    for (const pos in lista) {
        soma += lista[pos]
        tot++
        if (lista[pos] > maior){
            maior = lista[pos]
        }
        if (lista[pos] < menor){
            menor = lista[pos]
        }
    }
    res.innerHTML = ''
    res.innerHTML += `<p>O total de números adicionados foram ${tot}</p>`
    res.innerHTML += `<p>A soma de todos os valores adicionados é igual a ${soma} </p>`
    res.innerHTML += `<p>O maior valor adicionado foi ${maior} </p>`
    res.innerHTML += `<p>O menor valor adicionado foi ${menor} </p>`
    res.innerHTML += `<p>A média de todos os valores é igual a  ${soma/tot} </p>`
}

function limpar(){
    lista.length = 0
    res.innerHTML = ''
    tab.innerHTML = ''
}