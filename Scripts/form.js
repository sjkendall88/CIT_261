// This will get infromation from the Libraries.io API

var libObj = new XMLHttpRequest();
libObj.open("GET", "HTTPS://libraries.io/api/platforms?api_key=d533a0e5dadda631c20965fb4ea6a783", "true");
libObj.responseType = "json";
libObj.send();
/* Create JavaScript object for Libraries */
var libPro = new Object();
    libPro.name;
    libPro.page;

/*-------------Libraries.io object-------------*/

libObj.onload = function() {

    var libInfo = libObj.response;
    console.log(libInfo);

    for (i = 0; i < libInfo.length; i++) {

        // Variable to hold obj. index name
        var indName = libInfo[i].name;
        var indPage = libInfo[i].homepage;

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

/* Clicking add option calls function to creaete array with selections and making the selections visible */

function selcList(selcObj){
    var name;
    var libInfo = libObj.response;

    for (var i= 0; i < selcObj.length; i++){
        if(selcObj.options[i].selected ==true){
            name = selcObj.options[i].text;
        console.log(name);

        for (i = 0; i < libInfo.length; i++) {

            // Variable to hold obj. index name
            var indName = libInfo[i].name;
            var indPage = libInfo[i].homepage;

            if(indName == name){
                libPro.name = indName;
                libPro.page = indPage;
                break;
            }
        }
        break;
        }
    }
    console.log(libPro);

    // Variable to hold obj. index name
    var indName = libPro.name;
    var indPage = libPro.page;
    var addOpt = indName + ': ' + indPage;

    // variable to create element <option>
    var elm = document.createElement("option");

    // Variable to create attribute "value"
    var att = document.createAttribute("value");

    // variable to create elememnt/value text
    var tex = document.createTextNode(addOpt);

    // add text to the value attribute
    att.value = indName;

    // add attribute to element
    elm.setAttributeNode(att);

    // add text to element
    elm.appendChild(tex);

    // add element to form <select>
    document.getElementById("s1").appendChild(elm);
}
