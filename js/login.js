document.getElementById('login_form').addEventListener('submit', function(event){
    event.preventDefault();  // Impede o envio do formulário e recarregamento da página

    // Captura os valores do e-mail e senha
    let emailRegister = document.getElementById('emailRegister').value;
    let passwordRegister = document.getElementById('password').value;



    // Pega os dados do localStorage salvos no cadastro usando o e-mail como chave primária
    let usuario = JSON.parse(localStorage.getItem(emailRegister));



    // Verifica se o usuário existe, caso não exista vai retornar que o email não ta cadastrado
    if (!usuario) {
        alert('E-mail não cadastrado!');
        return;
    }



    // Verifica se a senha está correta
    if (usuario.senha === passwordRegister) {
    
        // Redireciona para a página de teste para ver se funcionou
        setTimeout(function(){
            window.location.href = 'teste.html';
        }, 1000);
    } else {
        alert('E-mail ou senha incorretos!');
    }
});
