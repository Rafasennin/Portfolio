
const svg = d3.select("svg");
svg.attr({width: window.innerWidth, height: window.innerHeight});


const sky = svg.append("rect").attr("x",170).attr("y", 0).attr("width", 1200).attr("height",400).attr("fill","steelblue");

const grass = svg.append("rect").attr("x",170).attr("y", 400).attr("width", 1200).attr("height",100).attr("fill","green");

const clound1 = svg.append("circle").attr("cx",300).attr("cy", 80).attr("r", 35).attr("fill", "white");
const clound2 = svg.append("circle").attr("cx",330).attr("cy", 70).attr("r", 43).attr("fill", "white");
const clound3 = svg.append("circle").attr("cx",330).attr("cy", 85).attr("r", 45).attr("fill", "white");
const clound4 = svg.append("circle").attr("cx",400).attr("cy", 65).attr("r", 60).attr("fill", "white");
const clound5 = svg.append("circle").attr("cx",465).attr("cy", 75).attr("r", 42).attr("fill", "white");


var sun = svg.append("circle").attr("cx",670).attr("cy", 85).attr("r", 70).attr("fill", "yellow"); 

const clound6 = svg.append("circle").attr("cx",900).attr("cy", 80).attr("r", 35).attr("fill", "white");
const clound7 = svg.append("circle").attr("cx",930).attr("cy", 70).attr("r", 43).attr("fill", "white");
const clound8 = svg.append("circle").attr("cx",930).attr("cy", 85).attr("r", 45).attr("fill", "white");
const clound9 = svg.append("circle").attr("cx",1000).attr("cy", 65).attr("r", 60).attr("fill", "white");
const clound10 = svg.append("circle").attr("cx",1065).attr("cy", 75).attr("r", 42).attr("fill", "white");

var active = false;



    const baseCircle = svg.append("circle")
                          .attr("cx",-100)
                          .attr("cy", 390)
                          .attr("r", 70)
                          .attr("fill", "snow");

    const midleCircle = svg.append("circle")
                           .attr("cx",-100)
                           .attr("cy", 300)
                           .attr("r", 55)
                           .attr("fill", "snow");

    const topCircle = svg.append("circle")
                         .attr("cx",-100)
                         .attr("cy", 220)
                         .attr("r", 40)
                         .attr("fill", "snow");

    const leftArm = svg.append("line")
                       .attr("x1",-100)
                       .attr("y1",295)
                       .attr("x2",-100)
                       .attr("y2",270)
                       .attr("stroke","black")
                       .attr("stroke-width",10);

    const leftFingerUp = svg.append("line")
                            .attr("x1",-100)
                            .attr("y1",280)
                            .attr("x2",-100)
                            .attr("y2",242)
                            .attr("stroke","black")
                            .attr("stroke-width",10);

    const leftFingerDown = svg.append("line")
                              .attr("x1",-100)
                              .attr("y1",280)
                              .attr("x2",-100)
                              .attr("y2",300)
                              .attr("stroke","black")
                              .attr("stroke-width",10);

    const rightArm = svg.append("line")
                        .attr("x1",-100)
                        .attr("y1",295)
                        .attr("x2",-100)
                        .attr("y2",270)
                        .attr("stroke","black")
                        .attr("stroke-width",10);

    const rightFingerUp = svg.append("line")
                             .attr("x1",-100)
                             .attr("y1",283)
                             .attr("x2",-100)
                             .attr("y2",242)
                             .attr("stroke","black")
                             .attr("stroke-width",10);

    const rightFingerDown = svg.append("line")
                            .attr("x1",-100)
                            .attr("y1",283)
                            .attr("x2",-100)
                            .attr("y2",300)
                            .attr("stroke","black")
                            .attr("stroke-width",10);

    const upperDot = svg.append("circle")
                        .attr("cx",-100)
                        .attr("cy", 290)
                        .attr("r", 10)
                        .attr("fill", "black");

    const middleDot1 = svg.append("circle")
                        .attr("cx",-100)
                        .attr("cy", 325)
                        .attr("r", 10)
                        .attr("fill", "black");

    const middleDot2 = svg.append("circle")
                        .attr("cx",-100)
                        .attr("cy", 360)
                        .attr("r", 10)
                        .attr("fill", "black");

    const leftEye = svg.append("circle")
                        .attr("cx",-100)
                        .attr("cy", 215)
                        .attr("r", 7)
                        .attr("fill", "black");

    const righttEye = svg.append("circle")
                        .attr("cx",-100)
                        .attr("cy", 215)
                        .attr("r", 7)
                        .attr("fill", "black");

    const mouth = svg.append("ellipse")
                        .attr("ry",7)
                        .attr("rx", 20)
                        .attr("cy",240)
                        .attr("cx", -100)
                        .attr("stroke","red")
                        .attr("stroke-width",5)
                        .attr("fill", "black");
    
   




function pickRandom(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
    
 }
 
var timeOfDay = ["morning", "noon", "night", "rainy", "snowy"];

var switchTimeCircle = svg.append("circle").attr("cx",1300).attr("cy",60).attr("r", 40).attr("fill","darkgrey");
var switchTimeCircle2 = svg.append("circle").attr("cx",1300).attr("cy",60).attr("r", 30).attr("fill","red");
var text = svg.append("text").text("SWITCH").attr("x",1238).attr("y",130).attr("fill", "gold")
.attr("font-size",30).attr("stroke","black").attr("font-family","sans-serif").attr("stroke-width",1,3);

var text2 = svg.append("text").text("This is me, studying night and day").attr("x",470).attr("y",190).attr("fill", "gold")
.attr("font-size",30).attr("stroke","black").attr("font-family","sans-serif").attr("stroke-width",1,3);


function changeWeather(time){

    if (time === "morning") {
        sky.attr("fill","steelblue"); 
        sun.attr("cx",245).attr("fill", "gold").attr("r",55); 
        clound1.attr("fill","#FFFFFF");
        clound2.attr("fill","#FFFFFF");
        clound3.attr("fill","#FFFFFF");
        clound4.attr("fill","#FFFFFF");
        clound5.attr("fill","#FFFFFF");
        clound6.attr("fill","#FFFFFF");
        clound7.attr("fill","#FFFFFF");
        clound8.attr("fill","#FFFFFF");
        clound9.attr("fill","#FFFFFF");
        clound10.attr("fill","#FFFFFF");

        active = false;

        topCircle.attr("cx", -100);
        midleCircle.attr("cx", -100);
        baseCircle.attr("cx", -100);
        leftArm.attr("x1", -100).attr("x2", -100);
        leftFingerUp.attr("x1", -100).attr("x2", -100);
        leftFingerDown.attr("x1", -100).attr("x2", -100);
        rightArm.attr("x1", -100).attr("x2", -100);
        rightFingerUp.attr("x1", -100).attr("x2", -100);
        rightFingerDown.attr("x1", -100).attr("x2", -100);
        upperDot.attr("cx", -100).attr("x2", -100);
        middleDot1.attr("cx", -100);
        middleDot2.attr("cx", -100).attr("x2", -100);
        leftEye.attr("cx", -100);
        righttEye.attr("cx", -100);
        mouth.attr("cx", -100);
    }

    if (time === "noon") {
        sky.attr("fill","deepskyblue"); 
        sun.attr("cx",670).attr("cy", 85).attr("r", 70).attr("fill", "yellow"); 
        clound1.attr("fill","#FFFFFF");
        clound2.attr("fill","#FFFFFF");
        clound3.attr("fill","#FFFFFF");
        clound4.attr("fill","#FFFFFF");
        clound5.attr("fill","#FFFFFF");
        clound6.attr("fill","#FFFFFF");
        clound7.attr("fill","#FFFFFF");
        clound8.attr("fill","#FFFFFF");
        clound9.attr("fill","#FFFFFF");
        clound10.attr("fill","#FFFFFF"); 

        active = false;

        topCircle.attr("cx", -100);
        midleCircle.attr("cx", -100);
        baseCircle.attr("cx", -100);
        leftArm.attr("x1", -100).attr("x2", -100);
        leftFingerUp.attr("x1", -100).attr("x2", -100);
        leftFingerDown.attr("x1", -100).attr("x2", -100);
        rightArm.attr("x1", -100).attr("x2", -100);
        rightFingerUp.attr("x1", -100).attr("x2", -100);
        rightFingerDown.attr("x1", -100).attr("x2", -100);
        upperDot.attr("cx", -100).attr("x2", -100);
        middleDot1.attr("cx", -100);
        middleDot2.attr("cx", -100).attr("x2", -100);
        leftEye.attr("cx", -100);
        righttEye.attr("cx", -100);
        mouth.attr("cx", -100);
    }

    if (time === "night") {
        sky.attr("fill","black"); 
        sun.attr("cx",670).attr("cy", 85).attr("r", 70).attr("fill", "#e4e4a9"); 
        clound1.attr("fill","#D0D0D0");
        clound2.attr("fill","#D0D0D0");
        clound3.attr("fill","#D0D0D0");
        clound4.attr("fill","#D0D0D0");
        clound5.attr("fill","#D0D0D0");
        clound6.attr("fill","#D0D0D0");
        clound7.attr("fill","#D0D0D0");
        clound8.attr("fill","#D0D0D0");
        clound9.attr("fill","#D0D0D0");
        clound10.attr("fill","#D0D0D0");

        active = false;

        topCircle.attr("cx", -100);
        midleCircle.attr("cx", -100);
        baseCircle.attr("cx", -100);
        leftArm.attr("x1", -100).attr("x2", -100);
        leftFingerUp.attr("x1", -100).attr("x2", -100);
        leftFingerDown.attr("x1", -100).attr("x2", -100);
        rightArm.attr("x1", -100).attr("x2", -100);
        rightFingerUp.attr("x1", -100).attr("x2", -100);
        rightFingerDown.attr("x1", -100).attr("x2", -100);
        upperDot.attr("cx", -100).attr("x2", -100);
        middleDot1.attr("cx", -100);
        middleDot2.attr("cx", -100).attr("x2", -100);
        leftEye.attr("cx", -100);
        righttEye.attr("cx", -100);
        mouth.attr("cx", -100);
    }

    if(time === "rainy"){

        sky.attr("fill","navy"); 
        sun.attr("cx",670).attr("cy", 85).attr("r", 70).attr("fill", "navy"); 

        clound1.attr("fill","grey");
        clound2.attr("fill","grey");
        clound3.attr("fill","grey");
        clound4.attr("fill","grey");
        clound5.attr("fill","grey");
        clound6.attr("fill","grey");
        clound7.attr("fill","grey");
        clound8.attr("fill","grey");
        clound9.attr("fill","grey");
        clound10.attr("fill","grey");

       setInterval(rainDown,500);

       active = true;

       topCircle.attr("cx", -100);
        midleCircle.attr("cx", -100);
        baseCircle.attr("cx", -100);
        leftArm.attr("x1", -100).attr("x2", -100);
        leftFingerUp.attr("x1", -100).attr("x2", -100);
        leftFingerDown.attr("x1", -100).attr("x2", -100);
        rightArm.attr("x1", -100).attr("x2", -100);
        rightFingerUp.attr("x1", -100).attr("x2", -100);
        rightFingerDown.attr("x1", -100).attr("x2", -100);
        upperDot.attr("cx", -100).attr("x2", -100);
        middleDot1.attr("cx", -100);
        middleDot2.attr("cx", -100).attr("x2", -100);
        leftEye.attr("cx", -100);
        righttEye.attr("cx", -100);
        mouth.attr("cx", -100);

    } 

    if(time === "snowy"){

        sky.attr("fill","grey"); 
        sun.attr("cx",670).attr("cy", 85).attr("r", 70).attr("fill", "grey"); 

        clound1.attr("fill","snow");
        clound2.attr("fill","snow");
        clound3.attr("fill","snow");
        clound4.attr("fill","snow");
        clound5.attr("fill","snow");
        clound6.attr("fill","snow");
        clound7.attr("fill","snow");
        clound8.attr("fill","snow");
        clound9.attr("fill","snow");
        clound10.attr("fill","snow");

        active = false;

        topCircle.attr("cx",975).attr("cy",1000).transition().duration(3000).ease(d3.easeQuadIn).attr("cy",220);
        midleCircle.attr("cx",975).attr("cy",1000).transition().duration(1500).ease(d3.easeQuadIn).attr("cy",300);
        baseCircle.attr("cx",975).attr("cy",1000).transition().duration(500).ease(d3.easeQuadIn).attr("cy",390);
        leftArm .attr("x1",925).attr("x2",835).attr("y1",5000).attr("y2",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("y1",295).attr("y2",270);
        leftFingerUp.attr("x1",875).attr("x2",843).attr("y1",5000).attr("y2",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("y1",280).attr("y2",242);
        leftFingerDown.attr("x1",875).attr("x2",835).attr("y1",5000).attr("y2",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("y1",280).attr("y2",300);
        rightArm.attr("x1",1025).attr("x2",1115).attr("y1",5000).attr("y2",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("y1",295).attr("y2",270);
        rightFingerUp.attr("x1",1070) .attr("x2",1105).attr("y1",5000).attr("y2",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("y1",283).attr("y2",242);
        rightFingerDown.attr("x1",1070).attr("x2",1115).attr("y1",5000).attr("y2",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("y1",283).attr("y2",300);
        upperDot .attr("cx",975).attr("cy",5000).transition().duration(3000).ease(d3.easeQuadIn).attr("cy",290);
        middleDot1 .attr("cx",975).attr("cy",5000).transition().duration(1500).ease(d3.easeQuadIn).attr("cy",325);
        middleDot2 .attr("cx",975).attr("cy",5000).transition().duration(500).ease(d3.easeQuadIn).attr("cy",360);
        leftEye.attr("cx",960).attr("cy",5000).transition().duration(3000).ease(d3.easeQuadIn).attr("cy",215);
        righttEye.attr("cx",990).attr("cy",5000).transition().duration(3000).ease(d3.easeQuadIn).attr("cy",215);
        mouth.attr("cx", 975).attr("cy",5000).transition().duration(3000).ease(d3.easeQuadIn).attr("cy",240);

        setInterval(rainDown,3500);

       active = true;
        
    }
}


function switchOn(){
    changeWeather(timeOfDay[pickRandom(0,4)]) 
    return changeWeather;
}

switchTimeCircle2.on("click", switchOn);


function rainDown(){

    if(active){

   for (let index = 0; index < 10; index++) {

        //First clound
        var rainDrop1 = svg.append("circle").attr("r",5).attr("cy",120).attr("cx",300).attr("fill","lightblue");
        rainDrop1.transition().duration(2000).ease(d3.easeQuadIn).attr("cy",399).remove(); 

        var rainDrop2 = svg.append("circle").attr("r",5).attr("cy",133).attr("cx",340).attr("fill","lightblue");
        rainDrop2.transition().duration(1700).ease(d3.easeQuadIn).attr("cy",399).remove();
        
        var rainDrop3 = svg.append("circle").attr("r",5).attr("cy",127).attr("cx",380).attr("fill","lightblue");
        rainDrop3.transition().duration(1500).ease(d3.easeQuadIn).attr("cy",399).remove();

        var rainDrop4 = svg.append("circle").attr("r",5).attr("cy",126).attr("cx",420).attr("fill","lightblue");
        rainDrop4.transition().duration(2200).ease(d3.easeQuadIn).attr("cy",399).remove();

        var rainDrop5 = svg.append("circle").attr("r",5).attr("cy",121  ).attr("cx",460).attr("fill","lightblue");
        rainDrop5.transition().duration(2200).ease(d3.easeQuadIn).attr("cy",399).remove();

        var rainDrop6 = svg.append("circle").attr("r",5).attr("cy",115  ).attr("cx",490).attr("fill","lightblue");
        rainDrop6.transition().duration(2200).ease(d3.easeQuadIn).attr("cy",399).remove();

        //Second clound
        var rainDrop7 = svg.append("circle").attr("r",5).attr("cy",120).attr("cx",900).attr("fill","lightblue");
        rainDrop7.transition().duration(2000).ease(d3.easeQuadIn).attr("cy",399).remove(); 

        var rainDrop8 = svg.append("circle").attr("r",5).attr("cy",133).attr("cx",940).attr("fill","lightblue");
        rainDrop8.transition().duration(1700).ease(d3.easeQuadIn).attr("cy",399).remove();
        
        var rainDrop9 = svg.append("circle").attr("r",5).attr("cy",127).attr("cx",980).attr("fill","lightblue");
        rainDrop9.transition().duration(1500).ease(d3.easeQuadIn).attr("cy",399).remove();

        var rainDrop10 = svg.append("circle").attr("r",5).attr("cy",126).attr("cx",1020).attr("fill","lightblue");
        rainDrop10.transition().duration(2200).ease(d3.easeQuadIn).attr("cy",399).remove();

        var rainDrop11 = svg.append("circle").attr("r",5).attr("cy",121  ).attr("cx",1060).attr("fill","lightblue");
        rainDrop11.transition().duration(2200).ease(d3.easeQuadIn).attr("cy",399).remove();

        var rainDrop12 = svg.append("circle").attr("r",5).attr("cy",115  ).attr("cx",1090).attr("fill","lightblue");
        rainDrop12.transition().duration(2200).ease(d3.easeQuadIn).attr("cy",399).remove();
   }
    }   
}

//menu slide set up

const menuButton = document.querySelector(".side-menu__button__img");
const sideMenu = document.querySelector(".side-menu__container");
menuButton.addEventListener("click", ()=>{
    sideMenu.classList.toggle("side-menu__container--active")
});


//language changer

const sobreMim = document.querySelector(".main__article");


function languageChangerPortuguese (){
    sobreMim.innerHTML = `<img class="perfil__img" src="img/profile master.png">

    <h1 class="home__title">Bem-vindo e obrigado por visitar meu portfólio.</h1>

    <h2 class="article__title">Sobre mim,</h2>

    <p class="article__p">
        Meu nome é <u>Rafael D' Santos</u>, tenho 38 anos, sou brasileiro/israelense. Moro na cidade de 
        Bragança Paulista - SP com meus dois filhos. Sou apaixonado pelo aprendizado de novos idiomas e consigo me comunicar
        nas seguintes línguas: Inglês, Hebraico, Francês, Espanhol, Italiano. Nas horas vagas sou músico e adoro me aventurar
        na culinária japonesa.
    </p>

    <p class="article__p">
        Me considero uma pessoa muito dedicada, focada e aberta a oportunidades. Acredito no meu potêncial de desenvolvimento,
        mesmo com o desafio de migrar de carreira, <strong>saindo da área da saúde</strong>, onde atuei por mais de 15anos,
        indo agora em direção a carreira de programador.
    </p><br><br>

    <h2 class="article__title"><u>Minha trajetória</u></h2>

    <p class="article__p">
        Atuei por 15 anos na área de saúde, iniciando minha trajetória profissional como técnico em radiologia médica, função na qual
         estive por cinco anos. Após concluir minha graduação como farmacêutico, trabalhei em funções como farmacêutico e subgerente farmacêutico, liderando
        um time de mais de 15 colaboradores. Motivado pelo amor por novas culturas e busca de melhores condições de trabalho, imigrei para Israel como cidadão israelense, 
          onde recebi a licença para atuar como farmacêutico no país após 2 anos de muito estudo e provas de validação. Tive a oportunidade de atuar na Ben-shimon Floris,
           indústria farmacêutica israelense, na função de analista de assuntos regulatórios. Meu retorno ao Brasil despertou meu interesse por análises de sistemas
            e programação, me motivando  a estudar desenvolvimento Front-end. Iniciei meus estudos na plataforma Alura e hoje, faço parte do grupo de mentorados do 
            Pedro Marins e Henrique de Andrade. 
           Em paralelo, estou cursando Análise e Desenvolvimento de Sistemas pela Universidade São Francisco.
   </p><br>

   <h2 class="article__title"><u>Meus objetivos</u></h2>

    <p class="article__p">
        Busco minha primeira oportunidade como desenvolvedor “Júnior/Trainee” e estou bastante otimista com o
        desenvolvimento dessa trajetória. Gosto de salientar que independente das certificações e diploma, meu objetivo
        é mostrar trabalho e competência na prática.
        Estou em constante aprendizado, pois sei que o caminho da programação élongo e exige constante desenvolvimento, contudo, acredito
        que já possuo as habilidades necessárias para atuar como desenvolvedor <u>Junior/Trainee.</u>
</p><br><br>

<h2 class="article__title"><u>Sobre este portfólio</u></h2>

    <p class="article__p">Este portfólio foi desenvolvido utilizando as tecnologias: HTML5, CSS3 e Javascript. </p>
    <p class="article__p">A animação abaixo tem por objetivo, mostrar um pouco de conhecimento em lógica de programação, através
        de uma ilustração da minha rotina diária de estudos.
         </p>
    `
    
}


function languageChangerEnglish(){

    sobreMim.innerHTML = `<img class="perfil__img" src="img/profile master.png">

    <h1 class="home__title">Welcome and thank you for visiting my portfolio.</h1>
    
    <h2 class="article__title">About me,</h2>
    
    <p class="article__p">
    My name is <u>Rafael D' Santos</u>, I'm 38 years old, Brazilian/Israeli. I live in the city of
    Bragança Paulista - SP with my two children. I am passionate about learning new languages and I can communicate
    in the following languages: English, Hebrew, French, Spanish, Italian. In my free time time I like play guitar and cooking japanese food.
    </p>
    
    <p class="article__p">
    I consider myself a very dedicated, focused and open to opportunities person. I believe in my development potential,
    even with the challenge of changing career path, <strong>leaving the health area</strong>, where I worked for over 15 years,
    now heading towards a career as a programmer.
    </p><br><br>
    
    <h2 class="article__title"><u>My trajectory</u></h2>
    
    <p class="article__p">
    I've worked for 15 years in the health area, starting my professional career as a medical radiology technician, a function in which
    I was for five years. After completing my graduation as a pharmacist, I worked in roles as pharmacist and assistant pharmaceutical manager, leading
    a team of more than 15 employees. Motivated by the love for new cultures and the search for better working conditions, I immigrated to Israel as an Israeli citizen,
    where I received the license to work as a pharmacist in the country after 2 years of study and validation tests. I had the opportunity to work at Ben-shimon Floris,
    Israeli pharmaceutical industry, as a regulatory affairs analyst. My return to Brazil sparked my interest in systems analysis
    and programming, motivating me to study Front-end development. I started my studies on the Alura platform and today, I am part of the group of mentors at
    Pedro Marins and Henrique de Andrade.
    At the same time, I'm studying Systems Analysis and Development at Universidade São Francisco.
    </p><br>
    
    <h2 class="article__title"><u>My goals</u></h2>
    
    <p class="article__p">
    I am looking for my first opportunity as a “Junior/Trainee” developer and I am very optimistic about the
    development of this trajectory. I like to point out that regardless of certifications and degrees, my goal
    is to show work and competence in practice.
    I am in constant learning, because I know that the path of programming is long and requires constant development, however, I believe
    that I already have the necessary skills to act as a <u>Junior/Trainee</u> developer.
    </p><br><br>
    
    <h2 class="article__title"><u>About this Portfolio</u></h2>
    
    <p class="article__p">This portfolio was developed using the technologies: HTML5, CSS3 and Javascript. </p>
    <p class="article__p">The purpose of the animation below is to show a bit of knowledge in programming logic, through
    an illustration of my daily study routine.
    </p>`
    
}


