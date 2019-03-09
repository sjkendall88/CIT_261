function storFunc() {
    var firName = document.getElementById("fName").value;
    var lasName = document.getElementById("lName").value;
    var inAge = document.getElementById("age").value;

    localStorage.setItem("fName", firName);
    localStorage.setItem("lName", lasName);
    localStorage.setItem("age", inAge);

    var fName = localStorage.getItem("fName");
    var lName = localStorage.getItem("lName");
    var age = localStorage.getItem("age");

    var outPut = fName + " " + lName + " " + age;

    // variable to create element <option>
    var elm = document.createElement("option");

    // variable to create elememnt/value text
    var tex = document.createTextNode(outPut);

    // add text to element
    elm.appendChild(tex);

    // add element to form <select>
    document.getElementById("s1").appendChild(elm);
}
