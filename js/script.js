document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById("senha").value;
    const confirmarsenha = document.getElementById("confirmarsenha").value;
    
    if (senha !== confirmarsenha) {
        alert("As senhas não coincidem!");
        return;
    }


    alert(`Informações cadastradas:\n\nNome: ${nome}\nE-mail: ${email}\nSenha: ${senha}`);

    document.getElementById('contactForm').reset();
});