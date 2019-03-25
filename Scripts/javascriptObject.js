var outPut = "";
var mySelf, myFather, myMother, rePrompt, myBrother, mySister, callIt, x, selcVal;
var outLine = [];

function inPers(first, last, age, eye, hair, height, weight) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.eye = eye;
    this.hair = hair;
    this.height = height;
    this.weight = weight;
}

function storFunc() {
    var first = document.getElementById("fName").value;
    var last = document.getElementById("lName").value;
    var age = document.getElementById("age").value;
    var eye = document.getElementById("eyeColor").value;
    var hair = document.getElementById("hairColor").value;
    var height = document.getElementById("inHeight").value;
    var weight = document.getElementById("inWeight").value;



    rePrompt = window.prompt("What person would you like to add to your family?", "Self, Father, Mother, Brother, Sister");

    if (rePrompt == null || rePrompt == "") {
        alert("Cancelled by user")
    } else if (rePrompt == "Self" || rePrompt == "self") {
        mySelf = new inPers(first, last, age, eye, hair, height, weight);
        console.log(mySelf);
        rePrompt = "mySelf";
    } else if (rePrompt == "Father" || rePrompt == "father") {
        myFather = new inPers(first, last, age, eye, hair, height, weight);
        console.log(myFather);
        rePrompt = "myFather";
    } else if (rePrompt == "Mother" || rePrompt == "mother") {
        myMother = new inPers(first, last, age, eye, hair, height, weight);
        console.log(myMother);
        rePrompt = "myMother";
    } else if (rePrompt == "Brother" || rePrompt == "brother") {
        myBrother = new inPers(first, last, age, eye, hair, height, weight);
        console.log(myBrother);
        rePrompt = "myBrother";
    } else if (rePrompt == "Sister" || rePrompt == "sister") {
        mySister = new inPers(first, last, age, eye, hair, height, weight);
        console.log(mySister);
        rePrompt = "mySister";
    }

    localStorage.setItem(mySelf.first, mySelf);
    console.log(mySelf.first);
//    localStorage.setItem(mySelf.first, mySelf.stringify({"First Name: ": mySelf.first, ....}));
}
// this function will use check boxes in alert box to determine what info to return
function getInfo() {
    var userList, userList1;

    userList1 = ["first", "last", "age", "eye", "hair", "weight", "height"];
    userList = [
        document.getElementById("first").checked
        , document.getElementById("last").checked
        , document.getElementById("age").checked
        , document.getElementById("eye").checked
        , document.getElementById("hair").checked
        , document.getElementById("weight").checked
        , document.getElementById("height").checked
    ];

    console.log(userList);
    console.log(outLine);

    function lineOut() {

        for (i = 0; i < userList.length; i++) {
            if (userList[i] == true) {
                outLine[outLine.length] = userList1[i];
            }
        }
    }

    callIt = lineOut();

    console.log(outLine);

    rePrompt = window.prompt("What person would you like information for?", "Self, Father, Mother, Brother, Sister");

    if (rePrompt == null || rePrompt == "") {
        alert("Cancelled by user")
    } else if (rePrompt == "Self" || rePrompt == "self") {
        for (x in mySelf) {
            for (i = 0; i < outLine.length; i++) {
                if (outLine[i] == x) {
                    outPut += mySelf[x] + " ";
                }
            }
        }
    } else if (rePrompt == "Father" || rePrompt == "father") {
        for (x in myFather) {
            for (i = 0; i < outLine.length; i++) {
                if (outLine[i] == x) {
                    outPut += myFather[x] + " ";
                }
            }
        }
    } else if (rePrompt == "Mother" || rePrompt == "mother") {
        for (x in myMother) {
            for (i = 0; i < outLine.length; i++) {
                if (outLine[i] == x) {
                    outPut += myMother[x] + " ";
                }
            }
        }
    } else if (rePrompt == "Brother" || rePrompt == "brother") {
        for (x in myBrother) {
            for (i = 0; i < outLine.length; i++) {
                if (outLine[i] == x) {
                    outPut += myBrother[x] + " ";
                }
            }
        }
    } else if (rePrompt == "Sister" || rePrompt == "sister") {

        for (x in mySister) {
            for (i = 0; i < outLine.length; i++) {
                if (outLine[i] == x) {
                    outPut += mySister[x] + " ";
                }
            }
        }
    }


    console.log(outPut);

    // variable to create element <option>
    var elm = document.createElement("option");

    // variable to create elememnt/value text
    var tex = document.createTextNode(outPut);

    // add text to element
    elm.appendChild(tex);

    // add element to form <select>
    document.getElementById("s1").appendChild(elm);
}
