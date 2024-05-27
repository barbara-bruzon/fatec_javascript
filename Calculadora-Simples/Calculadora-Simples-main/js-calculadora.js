const valor1 = document.getElementById('valor1').value;
const valor2 = document.getElementById('valor2').value;

const btnCalcula = document.getElementById('btnCalcula');
btnCalcula.addEventListener("click", Calculos);

function Calculos() {
    if (document.getElementById('operador').value == "1") {
        Soma();
    }
    else if (document.getElementById('operador').value == "2") {
        Subt();
    }
    else if (document.getElementById('operador').value == "3") {
        Div();
    }
    else if (document.getElementById('operador').value == "4") {
        Mult();
    }
}
function Soma() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Por favor, preencha todo os campos!");
    }
    else {
        const result = Number(valor1)+Number(valor2);
        document.getElementById("resultado").innerText = result;
    }
}

function Subt() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Por favor, preencha todo os campos!");
    }
    else {
        const result = Number(valor1)-Number(valor2);
        document.getElementById("resultado").innerText = result;
    }
}

function Div() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Por favor, preencha todo os campos!");
    }
    else {
        const result = Number(valor1)/Number(valor2);
        document.getElementById("resultado").innerText = result;
    }
}

function Mult() {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    if (valor1 == "" || valor2 == "") {
        alert("Por favor, preencha todo os campos!");
    }
    else {
        const result = Number(valor1)*Number(valor2);
        document.getElementById("resultado").innerText = result;
    }
}