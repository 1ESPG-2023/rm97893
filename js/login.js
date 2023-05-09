
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

localStorage.setItem("user1",usuario1);
localStorage.setItem("user2",usuario2);

//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
const usuario = {
    nomeUsuario:"",
    senhaUsuario:""
}

 

addEventListener("click" ,(evento)=>{

    evento.preventDefault();

    // console.log(evento.target.id == "btnSubmit");
    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
        
        //Armazenando os dados no OBJETO
        // usuario.nomeUsuario = document.querySelector("#idUser").value;
        // usuario.senhaUsuario = document.querySelector("#idPass").value;
        
        let lista = JSON.parse(localStorage.getItem("listaUser"));

        lista.array.forEach((usuario) => {
            console.log(usuario.nomeUsuario);
        });

        const h1titulo = document.querySelector("#titulo");

        //VALIDAÇÃO
        if(usuario.nomeUsuario == "rm97893" && senha.senhaUsuario == "12345"){
            console.log("VALIDADO");
            h1titulo.innerHTML = "Bem Vindo : " + usuario.nomeUsuario;
        }else{
            console.log("NÃO VALIDADO");
            h1titulo.innerHTML = "";
        }

    }
});