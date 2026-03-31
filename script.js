// pegando os elementos do HTML (se errar o id aqui, esquece... nada funciona)
const inputAltura = document.getElementById("altura");
const inputPeso = document.getElementById("peso");

const btnCalcular = document.getElementById("calcular");
const btnLimpar = document.getElementById("limpar");

const boxResultado = document.getElementById("resultado");



// função pra classificar o IMC
// não mexer muito aqui pq já tá funcionando (já sofri aqui)
function classificarIMC(imc) {

    if (imc < 18.5) return "Abaixo do peso";

    if (imc < 25) return "Peso normal";

    if (imc < 30) return "Sobrepeso";

    if (imc < 35) return "Obesidade grau I";

    if (imc < 40) return "Obesidade grau II";

    return "Obesidade grau III";
}




// evento do botão calcular
btnCalcular.addEventListener("click", () => {

    // pegando os valores
    let altura = parseFloat(inputAltura.value);
    let peso = parseFloat(inputPeso.value);


    // validação básica (evita erro besta)
    if (!altura || !peso || altura <= 0 || peso <= 0) {

        boxResultado.classList.remove("hidden");
        boxResultado.innerHTML = "Preenche direito aí mano 😅";

        return;
    }


    // se digitarem em cm (tipo 175), converte
    if (altura > 3) {
        altura = altura / 100;
    }


    // cálculo do IMC
    const imc = peso / (altura * altura);


    // curiosidade (trauma pessoal kkk)
    // antes de casar: 69kg
    // depois: 95kg
    // altura: 1.77
    // resultado... 💀


    const classificacao = classificarIMC(imc);


    boxResultado.classList.remove("hidden");


    boxResultado.innerHTML = `
    <strong>Seu IMC é ${imc.toFixed(2)}</strong><br>
    ${classificacao}
  `;
});




// botão limpar
btnLimpar.addEventListener("click", () => {

    inputAltura.value = "";
    inputPeso.value = "";


    boxResultado.innerHTML = "";


    boxResultado.classList.add("hidden");
});