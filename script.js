

const buttonconvert = document.querySelector
    (".button-convert")

function Transform() {

    const InputValue = document.querySelector("input").value

    const ValordoBrasil = document.querySelector(".Valor-Brasil")

    const ValordoDolar = document.querySelector(".Valor-do-Dolar")
    
    const SelectValue = document.querySelector(".select-Value").value

    console.log(SelectValue)
    const DollarToday = 4.85
    const EuroToday = 6.00

    if (SelectValue == "dolar") {

        ValordoDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(InputValue / DollarToday)

    }

    if (SelectValue == "euro") {

        ValordoDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(InputValue / EuroToday)

    }

        ValordoBrasil.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(InputValue)

}



function changeCurrency() {

    const SelectValue = document.querySelector(".select-Value").value
    const CurrencyName = document.querySelector(".Currency-Name")
    const LogoEstadosUnidos = document. querySelector(".Logo-Estados")

    if(SelectValue == "euro") {

        CurrencyName.innerHTML = "Euro"
        
        LogoEstadosUnidos.src= "imagens/Euro.png"
        
    }

    if(SelectValue == "dolar") {

        CurrencyName.innerHTML = "Dólar americano"

        LogoEstadosUnidos.src= "imagens/Dolar.png"
        
    }
    
    Transform()
}


