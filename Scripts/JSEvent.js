var jsImage = document.getElementById("tutReb");

function onToch() {
    var pos = 0;
    var id = setInterval(frame, 10);
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
