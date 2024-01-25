
//-----------Justify---------usando el DOM

const $containerJustify=document.querySelector(".container-justify-content");
const $description=document.getElementById("justify-description");
let text="";
//center
function jcenter(){
    text="<b>center:</b>items are centered along the line";
    $containerJustify.style.setProperty("justify-content","center");
    $description.innerHTML=text;
}
const $eventCenter=document.getElementById("justify-center");
//$eventCenter.onclick=jcenter;
//with addEvent
$eventCenter.addEventListener("click",jcenter);

//Flex-Start
function jflexStart(){
    text="<b>flex-start (default):</b> items are packed toward the start line";
    $containerJustify.style.setProperty("justify-content","flex-start");
    $description.innerHTML=text;
}
const $eventFlexStart=document.getElementById("justify-flex-start");
$eventFlexStart.onclick=jflexStart;

//Flex-End
function jflexEnd(){
    text="<b>flex-end:</b> items are packed toward to end line";
    $containerJustify.style.setProperty("justify-content","flex-end");
    $description.innerHTML=text;
}
const $eventFlexEnd=document.getElementById("justify-flex-end");
$eventFlexEnd.addEventListener("click",jflexEnd);

//Flex-Space-Between
function jflexBetween(){
    text="<b>space-between:</b> items are evenly distributed in the line; first item is on the start line, last item on the end line";
    $containerJustify.style.setProperty("justify-content","space-between");
    $description.innerHTML=text;
}
const $eventSpaceBetween=document.getElementById("justify-space-between");
$eventSpaceBetween.addEventListener("click",jflexBetween);

//Flex-Space-Around


function jflexAround(){
    text="space-around: items are evenly distributed in the line with equal space around them";
    $containerJustify.style.setProperty("justify-content","space-around");
    $description.textContent=text;
}
const $eventSpaceAround=document.getElementById("justify-space-around");
$eventSpaceAround.addEventListener("click",jflexAround);

//Flex-Space-Evenly


function jflexEvenly(){
    text="space-evenly: items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same";
    $containerJustify.style.setProperty("justify-content","space-evenly");
    $description.textContent=text;
}

const $eventSpaceEvenly=document.getElementById("justify-space-evenly");
$eventSpaceEvenly.addEventListener("click",jflexEvenly);


//DOM CLASES Y TEXTO HTML
const $buttons=document.querySelector(".justify-buttons");
console.log($buttons);
console.log($buttons.className);
console.log($buttons.classList);

$buttons.classList.add("color-font-button");
console.log($buttons.classList.contains("color-font-button"));

//$buttons.classList.toggle("color-font-button");