
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




function pickRandom(){
    
    let randomNumber = Math.round(Math.random() * 2);
    return randomNumber
    
    }
 
var timeOfDay = ["morning", "noon", "night"];

var switchTimeCircle = svg.append("circle").attr("cx",1320).attr("cy",60).attr("r", 20).attr("fill","darkgrey");
var switchTimeCircle2 = svg.append("circle").attr("cx",1320).attr("cy",60).attr("r", 15).attr("fill","red");
var text = svg.append("text").text("SWITCH").attr("x",1290).attr("y",100).attr("fill", "black");


function changeWeather(time){

    if (time === "morning") {
        sky.attr("fill","steelblue"); 
        sun.attr("cx",245).attr("fill", "gold").attr("r",55);
    }

    if (time === "noon") {
        sky.attr("fill","deepskyblue"); 
        sun.attr("cx",670).attr("cy", 85).attr("r", 70).attr("fill", "yellow"); 
        
    }

    if (time === "night") {
        sky.attr("fill","navy"); 
        sun.attr("cx",670).attr("cy", 85).attr("r", 50).attr("fill", "white"); 
        
    }
}

function switchOn(){
    changeWeather(timeOfDay[pickRandom()]) 
    return changeWeather;
}

switchTimeCircle2.on("click", switchOn);
    


