let botonn = document.getElementById("boton")


botonn.addEventListener("click", todo)


function todo() {
    let peso = Number(document.getElementById("weight").value);
    let altura = Number(document.getElementById("height").value);
    let respuesta = document.getElementById("respuesta")
    let infoestado = document.getElementById("infoestado")
    if (altura > 3) altura = altura / 100;

    let res
    let calculo = peso / (altura * altura)
    respuesta.value = calculo.toFixed(2);

    if (calculo < 18.5) {
        res = "Bajo peso";
    }
    else if (calculo >= 18.5 && calculo <= 24.9) {
        res = "Peso normal";
    }
    else if (calculo >= 25 && calculo <= 29.9) {
        res = "Sobrepeso";
    }
    else if (calculo >= 30 && calculo <= 34.9) {
        res = "Obesidad grado I";
    }
    else if (calculo >= 35 && calculo <= 39.9) {
        res = "Obesidad grado II";
    }
    else if (calculo >= 40) {
        res = "Obesidad grado III (obesidad mórbida)";
    }

    infoestado.innerText = res
}