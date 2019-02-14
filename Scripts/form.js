// This will get infromation from the Libraries.io API
var libObj = new XMLHttpRequest();
libObj.open("GET", "HTTPS://libraries.io/api/platforms?api_key=d533a0e5dadda631c20965fb4ea6a783", "true");
libObj.responseType = "json";
libObj.send();

/*-------------Libraries.io object-------------*/

libObj.onload = function() {

    var libInfo = libObj.response;
    console.log(libInfo);

    for (i = 0; i < libInfo.length; i++) {

        // Variable to hold obj. index name
        var indName = libInfo[i].name;

        // variable to create element <option>
        var elm = document.createElement("option");

        // Variable to create attribute "value"
        var att = document.createAttribute("value");

        // variable to create elememnt/value text
        var tex = document.createTextNode(indName);

        // add text to the value attribute
        att.value = indName;

        // add attribute to element
        elm.setAttributeNode(att);

        // add text to element
        elm.appendChild(tex);

        // add element to form <select>
        document.getElementById("s0").appendChild(elm);
    }

}





/*
// variable to create element <option>
var opt = document.createElement("option");
// Variabe to create element value
var val = document.createAttribute(value:tex);
// variable to create elememnt/value text
var tex = document.createTextNode(i.name)
// add text to element
opt.appendChild(tex);
// add element to form <select>
document.getElementById("s0").appendChild(opt);
*/














