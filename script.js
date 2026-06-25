// Seleciona o formulário pelo ID
const formulario = document.getElementById("formContato");

// Adiciona um evento quando o formulário for enviado
formulario.addEventListener("submit", function(event) {

    // Impede que a página recarregue
    event.preventDefault();

    // Pega os valores digitados
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Expressão para validar o e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert("Digite um e-mail válido!");
        return;
    }

    // Simula o envio
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    formulario.reset();

});