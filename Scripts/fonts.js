var d = new Date();
var curDate = d.getHours();

console.log(curDate);

if (curDate >= 0 && curDate <= 7) {
    document.body.style.fontFamily = "Courgette, cursive";
}else if(curDate >= 8 && curDate <= 15){
    document.body.style.fontFamily = "Merienda, cursive";
}else{
    document.body.style.fontFamily = "Kalam, cursive";
}
