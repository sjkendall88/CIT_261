var d = new Date();
var curDate = d.getMinutes();

console.log(curDate);

if (curDate >= 0 && curDate <= 19) {
    document.body.style.fontFamily = "Courgette, cursive";
}else if(curDate >= 20 && curDate <= 39){
    document.body.style.fontFamily = "Merienda, cursive";
}else{
    document.body.style.fontFamily = "Kalam, cursive";
}
