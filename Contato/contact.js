

var logradouro = document.getElementById("logradouro");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");


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

    const cepEmail = cepCep.value;
    const ruaEmail = logradouro.value;
    const bairroEmail = bairro.value;
    const cidadeEmail = cidade.value;
    const estadoEmail = estado.value;




    fetch("https://api.sheetmonkey.io/form/b9pqixqW8XkatkM9aSLZh", {

        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify({Nome: name, Email: email, Telefone: tel, Mensagem: textarea, Contato: contact, 
                            Seleção1: select1, Seleção2: select2, Checkbox: checkbox, Cep: cepEmail, Rua: ruaEmail, Bairro: bairroEmail, Cidade: cidadeEmail, Estado: estadoEmail}),

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


////////////////////////////////////////////////////////


async function fetchCep (cep){

    let errorMensage = document.querySelector(".erro__cep");
    errorMensage.innerHTML = "";

    try {
        const searchCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const jsonCep = await searchCep.json();
        
        if(jsonCep.erro){
            throw Error("Este CEP não existe");
        }

    logradouro.value = jsonCep.logradouro;
    bairro.value = jsonCep.bairro;
    cidade.value = jsonCep.localidade;
    estado.value = jsonCep.uf;

    return jsonCep;


    } catch (error) {
        errorMensage.innerHTML = "<p class='mensagemDeErro'>Estes CEP não existe. Por favor, tente novamente !</p>";  
    }
   
}

var cepCep = document.getElementById("cep");
cepCep.addEventListener("focusout", ()=> fetchCep(cepCep.value))


    