var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    // Faz a requisição na API
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            // Devolve como um objeto JavaScript
            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else{
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.remove("invisivel")
        }
       
    });

    // Envia a requisição
    xhr.send()

});