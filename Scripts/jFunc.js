function jFunc(selc) {
    // Variables
    var infName, inlName, inage, outPut, outInf, outNam, selc, err;
    // Get variable values
    infName = document.getElementById("fName").value;
    inlName = document.getElementById("lName").value;
    inage = document.getElementById("age").value;

    // object created with attributes and functions
    var inPers = {
        firstName: infName,
        lastName: inlName,
        age: inage,
        info: function () {
            outPut = this.firstName + " " + this.lastName + " " + this.age;
            return outPut;
        },
        fullName: function () {
            outPut = this.firstName + " " + this.lastName;
            return outPut;
        }
    }
    // Checks the input from button to call correct function
    function check() {
        if (selc = "outInf") {
            inPers.info();
        } else {
            inPers.fullName();
        }
        return outPut
    }
    // Variable for output
    err = check();

    // variable to create element <option>
    var elm = document.createElement("option");

    // variable to create elememnt/value text
    var tex = document.createTextNode(err);

    // add text to element
    elm.appendChild(tex);

    // add element to form <select>
    document.getElementById("s1").appendChild(elm);
}
