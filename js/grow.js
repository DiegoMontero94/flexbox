//--- FLEX-GROW --

const $inputs=document.querySelectorAll('.get-number-grow > input[type="number"]');
$inputs.forEach((el)=>
console.log(el.value));

function readGrow(){
    const $containerGrow=document.querySelectorAll(".items-flex-grow");
    $containerGrow.forEach((el, index)=>
    // console.log(el.textContent));
    el.style.setProperty("flex-grow",$inputs[index].value));
}
const $eventGrow=document.getElementById("btn-grow");
$eventGrow.addEventListener("click",readGrow);

//---  FLEX-SHRINK --
const $inputshrink=document.querySelectorAll('.get-number-shrink > input[type="number"]');
$inputshrink.forEach((el)=>
console.log(el.value));

function readShrink(){
    const $containerShrink=document.querySelectorAll(".items-flex-shrink");
    $containerShrink.forEach((el, index)=>
    // console.log(el.textContent));
    el.style.setProperty("flex-shrink",$inputshrink[index].value));
}
const $eventShrink=document.getElementById("btn-shrink");
$eventShrink.addEventListener("click",readShrink);
