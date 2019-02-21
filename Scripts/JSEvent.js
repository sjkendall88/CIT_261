var jsImage = document.getElementById("tutReb");
var pos = 0;
var id = setInterval(frame, 5);

function onToch() {
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        }else{
            pos++;
            jsImage.style.top = pos + "px";
            jsImage.style.left = pos + "px";
        }
    }

}
