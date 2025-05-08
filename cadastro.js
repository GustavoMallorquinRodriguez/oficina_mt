function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if(email == "iudy" && senha == "gustavo"){
        alert('bem-vindo');
        location.href = "index.html";
    }else{
        alert('usuario ou senha incorreto');
    }
}