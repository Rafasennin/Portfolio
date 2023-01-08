
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


function pickRandom(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
    
 }
 
var timeOfDay = ["morning", "noon", "night", "rainy"];

var switchTimeCircle = svg.append("circle").attr("cx",1300).attr("cy",60).attr("r", 40).attr("fill","darkgrey");
var switchTimeCircle2 = svg.append("circle").attr("cx",1300).attr("cy",60).attr("r", 30).attr("fill","red");
var text = svg.append("text").text("SWITCH").attr("x",1238).attr("y",130).attr("fill", "gold")
.attr("font-size",30).attr("stroke","black").attr("font-family","sans-serif").attr("stroke-width",1,3);

var active = false;


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

       setInterval(rainDown,700);

       active = true;
    }
}

function switchOn(){
    changeWeather(timeOfDay[pickRandom(0,3)]) 
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