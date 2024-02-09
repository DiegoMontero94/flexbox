//-----------CROSS AXIS Align-Items---------usando el DOM

const $containerAlignItems=document.querySelector(".container-align-items");
//get radio
function row_active() {
    $containerAlignItems.style.setProperty("flex-flow","row nowrap");
}
function column_active() {
    $containerAlignItems.style.setProperty("flex-flow","column nowrap");
}

//Flex-Start Align-Items
function jflexStartA(){
    if(document.getElementById("r-row").checked)
    {
        row_active();
        $containerAlignItems.style.setProperty("align-items","flex-start");
    }
    else if(document.getElementById("c-column").checked)
    {
        column_active();
        $containerAlignItems.style.setProperty("align-items","flex-start");
    }
}
const $eventAFlexStart=document.getElementById("Align-flex-start");
$eventAFlexStart.addEventListener("click",jflexStartA);

//Stretch Align-Items
function jstretcha(){
    if(document.getElementById("r-row").checked)
    {
        row_active();
        $containerAlignItems.style.setProperty("align-items","stretch");
    }
    else if(document.getElementById("c-column").checked)
    {
        column_active();
        $containerAlignItems.style.setProperty("align-items","stretch");
    }
}
const $eventStretchA=document.getElementById("Align-stretch");
$eventStretchA.addEventListener("click",jstretcha);

//Flex-End Align-Items
function jflexenda(){
    if(document.getElementById("r-row").checked)
    {
        row_active();
        $containerAlignItems.style.setProperty("align-items","flex-end");
    }
    else if(document.getElementById("c-column").checked)
    {
        column_active();
        $containerAlignItems.style.setProperty("align-items","flex-end");
    }
}
const $eventFlexEndA=document.getElementById("Align-flex-end");
$eventFlexEndA.addEventListener("click",jflexenda);

//Center Align-Items
function jcentera(){
    if(document.getElementById("r-row").checked)
    {
        row_active();
        $containerAlignItems.style.setProperty("align-items","center");
    }
    else if(document.getElementById("c-column").checked)
    {
        column_active();
        $containerAlignItems.style.setProperty("align-items","center");
    }
}
const $eventCenterA=document.getElementById("Align-center");
$eventCenterA.addEventListener("click",jcentera);

//BaseLine Align-Items
function jbaselinea(){
    if(document.getElementById("r-row").checked)
    {
        row_active();
        $containerAlignItems.style.setProperty("align-items","baseline");
    }
    else if(document.getElementById("c-column").checked)
    {
        column_active();
        $containerAlignItems.style.setProperty("align-items","baseline");
    }
}
const $eventBaseLineA=document.getElementById("Align-baseline");
$eventBaseLineA.addEventListener("click",jbaselinea);

//CREATE ELEMENT DOM
//Crear botton
const $buttonCrear=document.createElement("button"),
$buttonText=document.createTextNode("Prueba");

//Obtener elemento donde se va adicionar el boton
const $contbutton=document.querySelector(".bot-dom");
//Adicionar clase al boton creado
$buttonCrear.classList.add("justify-buttons");

//agregar el boton al contenedor de botones
$buttonCrear.appendChild($buttonText);
$contbutton.appendChild($buttonCrear);