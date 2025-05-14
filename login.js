function logar(){
    var Usuario = document.getElementById('Usuario').value;
    var Senha = document.getElementById('Senha').value;
    
    if(Usuario == "iudy" && Senha == "gustavo"){
        alert('bem-vindo');
        location.href = "index.html";
    }else{
        alert('usuario ou senha incorreto');
    }
}