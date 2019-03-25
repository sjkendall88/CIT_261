//Script for animation
var menu, pare, chil, indName = "CSS/jsTransAniTrans.css",
    indName1 = "stylesheet";

pare = document.head;
chil = document.getElementById('s0');
console.log(pare);

// variable to create element <option>
var elm = document.createElement("link");

// Variable to create attribute "value"
var att = document.createAttribute("href");
var att1 = document.createAttribute("rel");

// variable to create elememnt/value text
var tex = document.createTextNode(indName);
var tex1 = document.createTextNode(indName1);

// add text to the value attribute
att.value = indName;
att1.value = indName1;

// add attribute to element
elm.setAttributeNode(att);
elm.setAttributeNode(att1);

// add text to element
elm.appendChild(tex);
elm.appendChild(tex1);

// add element to form <select>
pare.insertBefore(elm, chil);

function spin() {
    var i = 0;
    var icAn = document.getElementById("imgSpin");
    icAn.class = "imgSpin";
//    while (i < 2) {
//        // Set animation using document
//        var n = i % 2;
//        if (n != 0) {
//            icAn.style.transition = "transform 3s";
//            icAn.style.transform = "rotateY(360deg)";
//            var i = 0;
//        } else {
//            icAn.style.transition = "";
//            icAn.style.transform = "";
//            i++;
//        }
//    }
}
