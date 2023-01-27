
const handleSubmit = (event)=> {

    event.preventDefault();
    addLoading();

    const name = document.querySelector("#nomesobrenome").value; 
    const email = document.querySelector("#seuemail").value; 
    const tel = document.querySelector("#seutelefone").value; 
    const textarea = document.querySelector("#suamensagem").value; 
    const contact = document.querySelector(".contato").value; 
    const select1 = document.querySelector("#select1").value; 
    const select2 = document.querySelector("#select2").value; 
    const checkbox = document.querySelector("#checkbox").value; 


    fetch("https://api.sheetmonkey.io/form/b9pqixqW8XkatkM9aSLZh", {

        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify({Nome: name, Email: email, Telefone: tel, Mensagem: textarea, Contato: contact, 
                            Seleção1: select1, Seleção2: select2, Checkbox: checkbox}),

    }).then(removeLoading);
    
}

document.querySelector(".mainForm").addEventListener("submit", handleSubmit);


const button = document.querySelector("#submit");

const addLoading = ()=>{ 
    button.innerHTML='<img src="img/loadingfinal.png" alt="imagem de carregamento" class="loading">';
}

const removeLoading = ()=>{ 
        button.innerHTML='Enviado';
    }
    