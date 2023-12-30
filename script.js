

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
    const LibraToday = 4.00
    const BitcoinToday = 3.00
    
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

    if (SelectValue == "libra") {

        ValordoDolar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(InputValue / LibraToday)
        
    }

    if (SelectValue == "bitcoin") {

        ValordoDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(InputValue / BitcoinToday)
        
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
    
    if(SelectValue == "libra") {

        CurrencyName.innerHTML = "Libra"

        LogoEstadosUnidos.src= "imagens/libra.png"
        
    }

    if(SelectValue == "bitcoin") {

        CurrencyName.innerHTML = "Bitcoin"

        LogoEstadosUnidos.src= "imagens/bitcoin.png"
        
    }

    Transform()
}


