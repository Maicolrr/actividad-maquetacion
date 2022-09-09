const color= document.getElementById("color");
const change= document.getElementById("changeColor");
const suprior= document.getElementById("suprior");
const btn_centro= document.getElementById("btn_centro");
const TamañoPx= document.getElementById("TamañoPx");
const centro= document.getElementById("centro");
const carpeta= document.getElementById("carpeta");

///cambiador de color
change.addEventListener("click",()=>{
  suprior.style.backgroundColor=color.value
  btn_centro.style.backgroundColor=color.value
  carpeta.style.color=color.value
})

/// cambiador de boder radius
TamañoPx.addEventListener("keyup", ()=>{
  suprior.style.borderTopLeftRadius=TamañoPx.value+"px"
  suprior.style.borderTopRightRadius=TamañoPx.value+"px"
  centro.style.borderBottomLeftRadius=TamañoPx.value+"px"
  centro.style.borderBottomRightRadius=TamañoPx.value+"px"
  if(TamañoPx.value>="400px" || TamañoPx.value>="400"){
    carpeta.style.top="30px"
    carpeta.style.left="110px"
  }else if (TamañoPx.value>="100px" ){
    carpeta.style.top="60px"
    carpeta.style.left>="90px"
  }else if (TamañoPx.value== "" || TamañoPx.value==TamañoPx.value){
    carpeta.style.top="80px"
    carpeta.style.left=" 130px"
  }
})