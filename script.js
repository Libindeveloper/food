const nav=document.getElementById("nav")
var setyear=document.getElementById("set-year")


function opennav(){
    nav.style.left="0%"
}


function closenav(){
    nav.style.left="-100%"
}

var date=new Date()
var d=date.getFullYear()
setyear.innerHTML=d