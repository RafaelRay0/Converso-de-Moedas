

const buttonconvert = document.querySelector
    (".button-convert")

async function Transform() {

    const InputValue = document.querySelector("input").value
    const ValordoBrasil = document.querySelector(".Valor-Brasil")
    const ValordoDolar = document.querySelector(".Valor-do-Dolar")
    const SelectValue = document.querySelector(".select-Value").value

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    console.log(data)
    const DollarToday = data.USDBRL.low
    const EuroToday = data.EURBRL.low
    const BitcoinToday = data.BTCBRL.low
    const LibraToday = 6.19
    


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
    const LogoEstadosUnidos = document.querySelector(".Logo-Estados")


    if (SelectValue == "euro") {

        CurrencyName.innerHTML = "Euro"

        LogoEstadosUnidos.src = "imagens/Euro.png"

    }

    if (SelectValue == "dolar") {

        CurrencyName.innerHTML = "Dólar americano"

        LogoEstadosUnidos.src = "imagens/Dolar.png"

    }

    if (SelectValue == "libra") {

        CurrencyName.innerHTML = "Libra"

        LogoEstadosUnidos.src = "imagens/libra.png"

    }

    if (SelectValue == "bitcoin") {

        CurrencyName.innerHTML = "Bitcoin"

        LogoEstadosUnidos.src = "imagens/bitcoin.png"

    }

    Transform()
}


