const botaoSubmit = document.querySelector("#buton1");
let dadosArmazenados = document.querySelector("#myname","#myoptions", "#escrevaaqui", "#data", "#agree1", "#agree2");
const result = document.querySelector("#resultado");

function getResult (event) {
    event.preventDefault();
    console.log(dadosArmazenados.value);
    result.innerHTML = dadosArmazenados.value;
}

botaoSubmit.addEventListener('click', getResult);

// + "#myoptions" + "#escrevaaqui" + "#data" + "#agree1" + "#agree2"