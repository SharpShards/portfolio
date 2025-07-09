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

const heroImage = document.querySelector("header #dvHeroArea #dvHAImagens img");
    setInterval(mudarImagem, 4000);
const herobutton = document.querySelector("header #dvHeroArea #dvHATexto button");
    herobutton.addEventListener("click", moverPortfolio);
const cards = document.querySelectorAll('#sctSkills .dvSeg .dvCard');
    for(let loop = 0; loop < cards.length; loop++){
        cards[loop].addEventListener('click', expandirSkill);
    }
const button = document.querySelectorAll("#sctProjetos .dvPri .dvSub button");
    for(let loop = 0; loop < button.length; loop++){
        button[loop].addEventListener('mouseover', brilharBotao);
        button[loop].addEventListener('mouseout', normalizarBotao);
    }
const a = document.querySelectorAll('#sctProjetos .dvPri .dvSub button a');
const seta = document.querySelectorAll('.dvSeta');
const sectionProjetos = document.querySelector("#sctProjetos");