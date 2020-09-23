let valor;
let resultado;

const botao=(num) =>{
    valor = document.calc.visor.value += num;
}


const reseta =()=>{
    document.calc.visor.value = '';
}


const calcula = ()=>{
    resultado = eval(valor);
    document.calc.visor.value = resultado.toLocaleString('pt-BR')
}