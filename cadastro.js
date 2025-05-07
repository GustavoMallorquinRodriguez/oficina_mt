function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if(email == "iudy" && senha == "gustavo"){
        alert('bem-vindo');
        location.href = "cliente.html";
    }else{
        alert('usuario ou senha incorreto');
    }
}