const form = document.querySelector('.form')                  // Seleciona o formulário

form.addEventListener('submit', function (e) {
    e.preventDefault();                                       // Não deixa que o form seja enviado e captura os inputs
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    if (!peso || peso > 300) {
        setResultado("Peso inválido", false);
        return;           // A função para aqui
    } else if (!altura || altura < 1 || altura > 2.5) {
        setResultado("Altura inválida", false)
        return;
    }

    const IMC = getIMC(peso, altura);
    const nivelImc = getNivelImc(IMC);

    const msg = `Seu IMC é ${IMC} (${nivelImc}).`;

    setResultado(msg, true);
})

function getNivelImc (imc) {                                  // Diz o nível do IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) {
        return nivel[5];
    }

    if (imc >= 35) {
        return nivel[4];
    }

    if (imc >= 30) {
        return nivel[3];
    }

    if (imc >= 25) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return nivel[0];
    }
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;                                                     // Calcula o IMC
    return imc.toFixed(2);
}


function criaP () {
    const p = document.createElement("p"); // Cria o elemento p                         // Cria um parágrafo
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');                               
    resultado.innerHTML = ""; // Zera o html

    const p = criaP();

    if (isValid) { 
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p); // Adiciona o p como filho do elemento resultado
}