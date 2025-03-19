document.getElementById('register_form').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário e o recarregamento da página



    // Captura os valores do e-mail e senha
    let emailRegister = document.getElementById('email_register').value;
    let passwordRegister = document.getElementById('password_register').value;
    let repeatPassword = document.getElementById('repeat_password').value;



    // Verifica se todos os campos foram preenchidos
    if (!emailRegister || !passwordRegister || !repeatPassword) {
        alert('Todos os campos devem ser preenchidos!');
        return;
    }

    // Verifica se as senhas coincidem
    if (passwordRegister !== repeatPassword) {
        alert('As senhas não estão iguais! Tente novamente.');
        return;
    }



    // Verifica se já existe esse usuário cadastrado
    if (localStorage.getItem(emailRegister)) {
        alert('E-mail já cadastrado!');
        return;
    }



    // Salva os dados no localStorage
    let newUser = {
        email: emailRegister,
        senha: passwordRegister
    };
    localStorage.setItem(emailRegister, JSON.stringify(newUser));



    // Exibe mensagem de sucesso e redireciona para login
    alert('Cadastro realizado com sucesso! Você será redirecionado para a página de login');



    // Redirecionamento para página de login
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 1000);
});
