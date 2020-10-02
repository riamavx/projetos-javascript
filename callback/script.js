// const $button = document.querySelector('button');

// $button.addEventListener("click", ()=>{
//     alert("o botão foi clicado")
// })



//CRIANDO BTN COM JS 

function novoBotao(text,callback){
    const $body = document.querySelector("body")
    const $button = document.createElement("button");
    $button.textContent = text;

    callback($button);
    
 $body.insertAdjacentElement("beforeend",$button);

 return $button

}

 novoBotao("login",(button)=>{
    button.style.cssText = `
    font-size: 50px;
    color: blue;
    
    `;


    button.addEventListener("click",()=>{
        alert("Botão de Login foi clicado")
    })
 });

novoBotao("signup",(button)=>{
    button.style.cssText = `
    font-size: 50px;
    color: red;
    `;

    button.addEventListener("click",()=>{
        alert("Botão de signup foi clicado")
    })
});

