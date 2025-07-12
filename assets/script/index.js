// Funções
function mudarImagem(){
    let imagens = ["portfolio", "starbucks", "orangePoints"];

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
    
    formacao.style.transform = "translateX(40px)";
    formacao.style.opacity = 0;

    setTimeout(function(){
        formacao.style.transition = "transform 400ms ease-out, opacity 800ms linear";
        formacao.style.transform = "translateX(0px)";
        formacao.style.opacity = 1;

    }, 100)
    
    formacao.style.transition = "";

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

function alterarCategorias(){
    // Tira os projetos adicionados
    fundoProjeto.innerHTML = "";

    // Categoria anterior
    let anterior = document.getElementsByClassName("dvSelecionado");

    // Só alterna entre as categorias. Não deseleciona a categoria atual.
    if(this.getAttribute("id") != anterior[0].getAttribute("id")){
        anterior[0].children[0].setAttribute("src", anterior[0].children[0].getAttribute("src").replace("Preto", "Branco"));
    
        anterior[0].removeAttribute("class");
    }

    // Categoria atual
    this.children[0].setAttribute("src", this.children[0].getAttribute("src").replace("Branco", "Preto"));
    
    this.setAttribute("class", "dvSelecionado");

    // Carregar projetos
    carregarProjetos(this.getAttribute("data-categoria"));
}

function carregarProjetos(categoria){
    let sites = {
        "portfolio": {
            "portfolio": {
                imagem: "assets/images/media/portfolio.png",
                nome: "Portfólio",
                tecnologias: ["HTML", "CSS", "Javascript"],
                link: "",
                repo: "https://github.com/SharpShards/portfolio.git"
            },
            "renan delbue": {
                imagem: "assets/images/media/renanDelbue.png",
                nome: "Renan Delbue",
                tecnologias: ["HTML", "CSS", "Javascript"],
                link: "https://renan-delbue.netlify.app/",
                repo: "https://github.com/SharpShards/renan-delbue.git"
            }
        },
        "landing page": {
            "starbucks": {
                imagem: "assets/images/media/starbucks.png",
                nome: "Starbuks",
                tecnologias: ["HTML", "CSS"],
                link: "https://sb-homepage.netlify.app",
                repo: "https://github.com/SharpShards/starbucks.git"
            }
        },
        "ferramenta": { 
            "orange points": {
                imagem: "assets/images/media/orangePoints.png",
                nome: "Orange Points",
                tecnologias: ["HTML", "CSS", "Javascript"],
                link: "https://orange-points.netlify.app",
                repo: "https://github.com/SharpShards/orange-points.git"
            },
            "super calculadora": {
                imagem: "assets/images/media/superCalculadora.png",
                nome: "Super Calculadora",
                tecnologias: ["HTML", "CSS", "Javascript"],
                link: "https://super-calculadora-ss.netlify.app/",
                repo: "https://github.com/SharpShards/super-calculadora.git"
            }
        },
        "jogo": {
            "balls fight": {
                imagem: "assets/images/media/ballsFight.png",
                nome: "Balls Fight",
                tecnologias: ["HTML", "CSS", "Javascript"],
                link: "https://balls-fight.netlify.app/",
                repo: "https://github.com/SharpShards/balls-fight.git"
            }
        }
    }

    let site = Object.keys(sites[categoria]);
    let contador = 0;

    for(let loop = 0; loop < site.length; loop++){
        // Cria card
        let div = document.createElement("div");
            div.setAttribute("class", "dvProjeto");
            div.style.transitionDelay = `0.0${contador}s`;
                contador += 8

        // Cria imagem
        let imagem = document.createElement("img");
            imagem.setAttribute("class", "imgProjeto");
            imagem.setAttribute("src", sites[categoria][site[loop]].imagem);
        
        // Cria título
        let nome = document.createElement("h3");
            nome.setAttribute("class", "hProjeto");
            nome.innerText = sites[categoria][site[loop]].nome;    

        // Cria fundo das tecnologias
        let fundoTech = document.createElement("div");
            fundoTech.setAttribute("class", "dvFundoTech");

        fundoProjeto.appendChild(div);
        div.appendChild(imagem);
        div.appendChild(nome);
        div.appendChild(fundoTech);

        // Cria as tecnologias
        for(let l = 0; l < sites[categoria][site[loop]].tecnologias.length; l++){
            let tech = document.createElement("img");
                tech.setAttribute("class", "imgTech");
                tech.setAttribute("src", `assets/images/icon/${sites[categoria][site[loop]].tecnologias[l]}.svg`);

                fundoTech.appendChild(tech);
        }

        // Cria o fundo para os botões
        let fundoBut = document.createElement("div");
            fundoBut.setAttribute("class", "dvFundoBut");
        
        div.appendChild(fundoBut);

        // Só cria o botão se precisar redirecionar para o site
        if(sites[categoria][site[loop]].link != ""){
            // Cria o botão para redirecionar ao site
            let bot = document.createElement("button");
                bot.setAttribute("class", "btnProjeto");
    
            let a = document.createElement("a");
                a.setAttribute("class", "aProjeto");
                a.setAttribute("href", sites[categoria][site[loop]].link);
                a.setAttribute("target", "_blank");
                a.innerText = "Site";
                a.addEventListener('mouseover', brilharBotao);
                a.addEventListener('mouseout', normalizarBotao);
    
            fundoBut.appendChild(bot);
            bot.appendChild(a);

            // Cria o botão para redirecionar ao repositório
            let but = document.createElement("button");
                but.setAttribute("class", "btnRepositorio");

            let lin = document.createElement("a");
                lin.setAttribute("class", "aRepositorio");
                lin.setAttribute("href", sites[categoria][site[loop]].repo);
                lin.setAttribute("target", "_blank");
                lin.innerText = "GitHub";
                lin.addEventListener('mouseover', brilharBotao);
                lin.addEventListener('mouseout', normalizarBotao);

            fundoBut.appendChild(but);
            but.appendChild(lin);
        }

        // Animação cards
        animarCards(div);
    }
}

function animarCards(div){
    setTimeout(function(){
        div.style.opacity = 1;
        div.style.transform = "translateY(0px)";
    }, 50)
}

function brilharBotao(){
    this.style.backgroundColor = "var(--prin)";
    this.style.boxShadow = "0 0 20px 3px var(--prin)";
    
    this.style.fontWeight = "900";
    this.style.color = "var(--secun)";
}

function normalizarBotao(){
    this.style.background = "var(--secun)";
    this.style.boxShadow = "none";

    this.style.color = "var(--text)";
    this.style.fontWeight = "600";
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
const fundoProjeto = document.querySelector("#sctProjetos #dvSites");
const categorias = document.querySelectorAll("#sctProjetos #dvCategorias div")
    for(let loop = 0; loop < categorias.length; loop ++){
        categorias[loop].addEventListener("click", alterarCategorias);
    }

// Main
//// Animação Hero Image
setInterval(mudarImagem, 4000);

//// Carregar primeira categoria em Projetos
carregarProjetos("landing page");