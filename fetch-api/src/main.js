const cep = document.querySelector('#cep');




const showData = (result) =>{
    for(const campo in result){
        if(document.querySelector('#' + campo)){
            document.querySelector('#'+campo).value = result[campo]

        }
    }
}

cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-", "");
    const options = {
        method: 'GET',
        mode: 'cors',      // o cors é uma maneira diferente de acessar de outro servidor
        cache: 'default'
    }


    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {response.json()
        .then(data => showData(data))
    }) // se der certo


    .catch(e => console.log("Erro:"+ e, message))  // se der errado
    
})