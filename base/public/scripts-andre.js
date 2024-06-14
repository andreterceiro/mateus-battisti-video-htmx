document.body.addEventListener("htmx:configRequest", function(event) {
    // Vale todos os requests da página, inclusive o que tem o interval obtendo os dados
    const form = event.target;
    const username = document.querySelector("#username").value;
    const errorDiv = document.querySelector("#username-error");

    if (username.length < 3) {
        errorDiv.innerText = "O usuário deve ter pelo menos 3 caracteres. Erro visto no browser";
        event.preventDefault();
    } else {
        errorDiv.innerText = "";
    }


});