//-----------CROSS AXIS Align-Items---------usando el DOM 

//const $containerAlignContent=document.querySelector(".container-align-content");
//const $containerAlignContent=document.getElementsByClassName("container-align-content");
const $containerAlignContent=document.querySelectorAll(".container-align-content");
console.log($containerAlignContent);
//get radio
function row_activeC() {
    $containerAlignContent.forEach((el)=>
    el.style.setProperty("flex-flow","row wrap"));
    //$containerAlignContent.style.setProperty("flex-flow","row wrap"));
}
function column_activeC() {
    $containerAlignContent.forEach((el)=>
    el.style.setProperty("flex-flow","column wrap"));
    //$containerAlignContent.style.setProperty("flex-flow","column wrap");    
}

//Flex-Start Align-Content
function flexStartC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","flex-start"));
        //$containerAlignContent.style.setProperty("align-content","flex-start");
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","flex-start"));
        //$containerAlignContent.style.setProperty("align-content","flex-start");
    }
}
const $eventAFlexStartC=document.getElementById("Content-flex-start");
$eventAFlexStartC.addEventListener("click",flexStartC);


//CENTER Align-Content
function centerC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","center"));
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","center"));        
    }
}
const $eventCenterC=document.getElementById("Content-center");
$eventCenterC.addEventListener("click",centerC);

//FLEX-END Align-Content
function flexEndC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","flex-end"));
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","flex-end"));        
    }
}
const $eventFlexEndC=document.getElementById("Content-flex-end");
$eventFlexEndC.addEventListener("click",flexEndC);

//STRETCH Align-Content
function stretchC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","stretch"));
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","stretch"));        
    }
}
const $eventStretchC=document.getElementById("Content-stretch");
$eventStretchC.addEventListener("click",stretchC);

//BETWEEN Align-Content
function betweenC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","space-between"));
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","space-between"));        
    }
}
const $eventBetweenC=document.getElementById("Content-between");
$eventBetweenC.addEventListener("click",betweenC);

//AROUND Align-Content
function aroundC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","space-around"));
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","space-around"));        
    }
}
const $eventAroundC=document.getElementById("Content-around");
$eventAroundC.addEventListener("click",aroundC);

//EVENLY Align-Content
function evenlyC(){
    if(document.getElementById("rc-row").checked)
    {
        row_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","space-evenly"));
    }
    else if(document.getElementById("cc-column").checked)
    {
        column_activeC();
        $containerAlignContent.forEach((el)=>
        el.style.setProperty("align-content","space-evenly"));        
    }
}
const $eventEvenlyC=document.getElementById("Content-evenly");
$eventEvenlyC.addEventListener("click",evenlyC);