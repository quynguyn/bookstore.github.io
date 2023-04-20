
var header= document.getElementById("header");
var mobieMenu = document.getElementById("mobie-menu");
var currentHeader = header.clientHeight;
console.log(currentHeader)
mobieMenu.onclick= function (){
    var isClose = header.clientHeight === 94;
    if(isClose){
        header.style.height = "auto";
    }
    else{
        header.style.height = "94px"
    }
}
