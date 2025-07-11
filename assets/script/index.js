// Funções
function mudarImagem(){
    let imagens = ["starbucks", "orangePoints"];

    // Verifica qual imagem deve ir
    // Quando chegar na última, zera o contador e volta pra primeira.
    if(animaHeroImage == (imagens.length - 1)){
        animaHeroImage = 0      
    }else{
        animaHeroImage += 1
    }
    
    heroImage.setAttribute("src", `assets/images/mockups/${imagens[animaHeroImage]}.svg`);
}

function moverPortfolio(){
    sectionProjetos.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function ativarBolha(){
    // Desativa bolha anterior
    let anterior = document.getElementsByClassName("dvAtivada");
    
    anterior[0].removeAttribute("class");

    // Ativa bolha atual
    this.setAttribute("class", "dvAtivada");

    // Muda texto
    let elemento = this.getAttribute("id");

    if(elemento == "dvPri"){
        formacao.children[0].innerHTML = "Operador de Computador";
        formacao.children[1].innerHTML = "Prepara";
        formacao.children[2].innerHTML = "Curso";
        formacao.children[3].innerHTML = "2017";
    }else if(elemento == "dvSeg"){
        formacao.children[0].innerHTML = "Game Design";
        formacao.children[1].innerHTML = "Zion";
        formacao.children[2].innerHTML = "Curso";
        formacao.children[3].innerHTML = "2018 - 2020";
    }else if(elemento == "dvTer"){
        formacao.children[0].innerHTML = "Ensino Médio";
        formacao.children[1].innerHTML = "CIOB";
        formacao.children[2].innerHTML = "Formação";
        formacao.children[3].innerHTML = "2020 - 2022";
    }else if(elemento == "dvQua"){
        formacao.children[0].innerHTML = "Programação Full-Stack";
        formacao.children[1].innerHTML = "B7Web";
        formacao.children[2].innerHTML = "Curso";
        formacao.children[3].innerHTML = "Cursando";
    }else if(elemento == "dvQui"){
        formacao.children[0].innerHTML = "Segurança Cibernética";
        formacao.children[1].innerHTML = "INMETRO";
        formacao.children[2].innerHTML = "Técnico";
        formacao.children[3].innerHTML = "2023 - 2024";
    }else if(elemento == "dvSex"){
        formacao.children[0].innerHTML = "Engenharia Mecânica";
        formacao.children[1].innerHTML = "UCP";
        formacao.children[2].innerHTML = "Graduação";
        formacao.children[3].innerHTML = "Cursando";
    }
}

function visualizarCurriculo(){
    fundoCurriculo.style.display = "flex";

    // Fade in
    setTimeout(function(){
        fundoCurriculo.style.opacity = 1;
    }, 1);

    // Zoom out
    setTimeout(function(){
        curriculo.style.transform = "scale(1)";
    }, 100);
}

function fecharCurriculo(){
    // Zoom in
    curriculo.style.transform = "scale(0.2)";

    // Fade out
    setTimeout(function(){
        fundoCurriculo.style.opacity = 0;
    }, 1);    

    setTimeout(function(){
        fundoCurriculo.style.display = "none";
    }, 500);
}

function expandirSkill(){
    let sk = this.children[1];
    let seta = this.children[0].children[0];

    seta.style.transition = 'transform 250ms linear';

    if(sk.style.maxHeight){
        sk.style.maxHeight = null;

        seta.style.transform = 'rotate(0deg)';
    }else{
        sk.style.maxHeight = sk.scrollHeight + "px";

        seta.style.transform = 'rotate(90deg)';
    }
}

function brilharBotao(){
    this.style.backgroundColor = "var(--prin)";
    this.style.boxShadow = "0 0 20px 3px var(--prin)";
    
    this.children[0].style.fontWeight = "800";
}

function normalizarBotao(){
    this.style.background = "rgba(0, 0, 0, 0.2)";
    this.style.boxShadow = "none";

    this.children[0].style.color = "var(--text)";
    this.children[0].style.fontWeight = "600";
}

// Declarações
let animaHeroImage = 0; 

// Elementos
const heroImage = document.querySelector("header #dvHeroArea #dvHAImagens img");
const herobutton = document.querySelector("header #dvHeroArea #dvHATexto button");
    herobutton.addEventListener("click", moverPortfolio);

const cards = document.querySelectorAll('#sctSkills .dvSeg .dvCard');
    for(let loop = 0; loop < cards.length; loop++){
        cards[loop].addEventListener('click', expandirSkill);
    }
const bolhas = document.querySelectorAll("#sctQuemSou .dvInfos #dvTrajetoria #dvBolhas div");
    for(let loop = 0; loop < bolhas.length; loop++){
        bolhas[loop].addEventListener("click", ativarBolha);
    }
const formacao = document.querySelector("#sctQuemSou .dvInfos #dvTrajetoria #dvFormacao");
const visuCurriculo = document.querySelector("#sctQuemSou .dvInfos #dvCurriculo #btnVisualizar");
    visuCurriculo.addEventListener("click", visualizarCurriculo);
const fundoCurriculo = document.querySelector("#sctQuemSou .dvInfos #dvCurriculo #dvVisuCurriculo");
const curriculo = document.querySelector("#sctQuemSou .dvInfos #dvCurriculo #dvVisuCurriculo #ifCurriculo");
const x = document.querySelector("#sctQuemSou .dvInfos #dvCurriculo #dvVisuCurriculo #imgX");
    x.addEventListener("click", fecharCurriculo);

const sectionProjetos = document.querySelector("#sctProjetos");
const button = document.querySelectorAll("#sctProjetos .dvPri .dvSub button");
    for(let loop = 0; loop < button.length; loop++){
        button[loop].addEventListener('mouseover', brilharBotao);
        button[loop].addEventListener('mouseout', normalizarBotao);
    }
const a = document.querySelectorAll('#sctProjetos .dvPri .dvSub button a');
const seta = document.querySelectorAll('.dvSeta');

// Main
//// Animação Hero Image
setInterval(mudarImagem, 4000);