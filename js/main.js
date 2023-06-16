const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const input = document.querySelectorAll("input");
const erroNome = document.querySelector("#erro-nome");
const erroIdade = document.querySelector("#erro-idade");

input.forEach(el => {
    el.addEventListener("blur", (event) => {
        event.preventDefault;
        erroNome.innerHTML = '';
        erroIdade.innerHTML = '';

        if (nome.value.length > 10) {
            erroNome.innerHTML = 'Limite 10 caracteres';
        }

        if (idade.value < 1 || idade.value > 9 || idade.value.length !== 1) {
            erroIdade.innerHTML = 'Deve ser entre 0 e 10';
        }
    });
});

