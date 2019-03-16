function jFunc(selc) {
    // Variables
    var infName, inlName, inAge, inEye, inHair, inHeight, inWeight, outPut, outInf, outNam, selc, err;
    // Get variable values
    infName = document.getElementById("fName").value;
    inlName = document.getElementById("lName").value;
    inAge = document.getElementById("age").value;
    inEye = document.getElementById("eye").value;
    inHair = document.getElementById("hair").value;
    inHeight = document.getElementById("height").value;
    inWeight = document.getElementById("weight").value;

    /* object created with attributes and functions
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
    */


    function inPers(first, last, age, eye, hair, height, weight){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eye = eye;
        this.hair = hair;
        this.height = height;
        this.weight = weight;
    }

    // Checks the input from button to call correct function
    function check() {

        // Create object


        if (selc == "outInf") {
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
