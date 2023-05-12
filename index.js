// ejercicio 1
let resultado = document.querySelector("#resultado")
let peso = document.querySelector("#peso")
let estatura = document.querySelector("#estatura")
let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e);
    let resultado1 = 0
    resultado.innerHTML+=resultado1
    return resultado.value = peso.value / (estatura.value * 2)
})

// ejercicio 2
let dolar = document.querySelector("#dolar")
let monedaLocal = document.querySelector("#pesos")
let divisa = document.querySelector("#divisa")
divisa.addEventListener("submit",(e)=>{
    e.preventDefault()
    let pesos = 140
    let resultado2 = 0
    monedaLocal.innerHTML+=resultado2
    return monedaLocal.value = dolar.value * pesos
})

//