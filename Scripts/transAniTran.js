/* Script for animation */
function spin() {
    var i = 0;
    while (i < 2){
        // Set animation using document
        var icAn = document.getElementById("imgSpin");
        var n = i % 2;
        if (n != 0){
            icAn.style.transition = "transform 3s";
            icAn.style.transform = "rotateY(360deg)";
            var i = 0;
        }else{
            icAn.style.transition = "";
            icAn.style.transform = "";
        i++;
        }
    }
}
setInterval(spin, 3000);
