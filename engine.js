//Atribuir variaveis a elementos que são usados para esse projeto
const botao = document.getElementById("botao");
const body = document.querySelector("body");

//Cores usadas no background da pagina.
const cores = ["#f4a261", "#457b9d", "#4a4e69", "#bc4749", "#e09f3e", "#9d8189", "#14213d", "#415a77"];

//Cor padrão da tela
body.style.backgroundColor = '#a6c48a';

//Agregando função ao botão
botao.addEventListener('click', mudarcor);

//Função para trocar cor do background
function mudarcor(){
    const iteraCores = parseInt(Math.random()*cores.length);
    body.style.backgroundColor = cores[iteraCores];
}
