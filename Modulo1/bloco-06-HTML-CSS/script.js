const botaoSubmit = document.querySelector("#buton1");
let dadosArmazenados = document.querySelector("#myname");
const result = document.querySelector("#resultado");

function getResult (event) {
    event.preventDefault();
    dadosArmazenados.value = "Nome completo: " + dadosArmazenados.value;
    result.innerHTML = dadosArmazenados.value;
    let escondeHidden = document.getElementsByClassName("hidden")[0];
    escondeHidden.classList.remove("hidden");
    dadosArmazenados.value = "";

    const atribuiEmail = document.getElementById("myemail").value;
    result.innerHTML = result.innerHTML + " E-mail: " + atribuiEmail;
    atribuiEmail.value = "";
}

botaoSubmit.addEventListener('click', getResult);

