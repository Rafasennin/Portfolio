
const handleSubmit = (event)=> {

    event.preventDefault();
    addLoading();

    const name = document.querySelector("#nomesobrenome").value; 
    const email = document.querySelector("#seuemail").value; 
    const tel = document.querySelector("#seutelefone").value; 
    const textarea = document.querySelector("#suamensagem").value; 
    const contact1 = document.querySelector("#radio-email").value; 
    const contact2 = document.querySelector("#radio-telefone").value; 
    const contact3 = document.querySelector("#radio-WhatsApp").value; 
    const select1 = document.querySelector("#select1").value; 
    const select2 = document.querySelector("#select2").value; 
    const checkbox = document.querySelector("#checkbox").value; 

    fetch("https://api.sheetmonkey.io/form/b9pqixqW8XkatkM9aSLZh", {

        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify({Nome: name, Email: email, Telefone: tel, Mensagem: textarea, Contato1: contact1, Contato2: contact2, Contato3: contact3, 
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
    

