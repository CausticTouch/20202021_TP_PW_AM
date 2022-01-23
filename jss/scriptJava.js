function incrementSaldo(i) {
    let saldo = document.getElementById("dropdown-item1").innerText;

    let saldo1= saldo.toString().replace("Saldo Currente:","");
    let saldo2 = saldo1.toString().replace(" ", "")
    let saldo3 = saldo2.toString().replace(" €", "")
    console.log(saldo3)

    let value = parseFloat(saldo3);

    value = (+value + i).toFixed(2);

    console.log(value)

    document.getElementById("dropdown-item1").innerText = "Saldo Currente: " + value.toString() + " €" 

}