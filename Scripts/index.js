var obj, keyName, optList, fName, lName, birthDay, eMail, phone, address, city, state, zipCode, famMem, famMemC, myFamily, mySpouse, mySelf, myFather, myMother, myBrother, mySister, mySon, myDaughter, numOfKeys, getFamName, userList, userList1, keyString, outPut = "",
    outLine = [];
// Person object *DONE*
function inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode) {
    this.fName = fName;
    this.lName = lName;
    this.birthDay = birthDay;
    this.eMail = eMail;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
}
// onchange function to get family member *DONE*
function getFam() {
    famMem = document.getElementById("famMem").value;
    console.log(famMem);
}
// function to add family member as object to local storage *DONE*
function addFam() {
    //    var obj, fName, lName, birthDay, eMail, phone, address, city, state, zipCode;

    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    birthDay = document.getElementById("birthDay").value;
    eMail = document.getElementById("email").value;
    phone = document.getElementById("phone#").value;
    address = document.getElementById("address").value;
    city = document.getElementById("city").value;
    state = document.getElementById("state").value;
    zipCode = document.getElementById("zipCode").value;

    console.log(famMem);

    if (famMem == null || famMem == "") {
        alert("Please select a Family Member.")
    } else if (famMem == "mySelf") {
        mySelf = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(mySelf);
        console.log(obj);
        localStorage.setItem(mySelf.fName, obj);
        famMem = mySelf.fName;
    } else if (famMem == "mySpouse") {
        mySpouse = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(mySpouse);
        console.log(obj);
        localStorage.setItem(mySpouse.fName, obj);
        famMem = mySpouse.fName;
    } else if (famMem == "myFather") {
        myFather = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(myFather);
        console.log(obj);
        localStorage.setItem(myFather.fName, obj);
        famMem = myFather.fName;
    } else if (famMem == "myMother") {
        myMother = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(myMother);
        console.log(obj);
        localStorage.setItem(myMother.fName, obj);
        famMem = myMother.fName;
    } else if (famMem == "myBrother") {
        myBrother = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(myBrother);
        console.log(obj);
        localStorage.setItem(myBrother.fName, obj);
        famMem = myBrother.fName;
    } else if (famMem == "mySister") {
        mySister = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(mySister);
        console.log(obj);
        localStorage.setItem(mySister.fName, obj);
        famMem = mySister.fName;
    } else if (famMem == "mySon") {
        mySon = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(mySon);
        console.log(obj);
        localStorage.setItem(mySon.fName, obj);
        famMem = mySon.fName;
    } else if (famMem == "myDaughter") {
        mySister = new inPers(fName, lName, birthDay, eMail, phone, address, city, state, zipCode);
        obj = JSON.stringify(mySister);
        console.log(obj);
        localStorage.setItem(mySister.fName, obj);
        famMem = myDaughter.fName;
    }
    //    Get the name of keys in local storage
    keyString = [];
    for (j = 0; j < localStorage.length; j++) {
        keyString[keyString.length] = localStorage.key(j);
    }

    // variable to create element <option>
    var elm = document.createElement("option");

    // Variable to create attribute
    var att = document.createAttribute("value");
    var att1 = document.createAttribute("id");

    // variable to create elememnt/value text
    var tex = document.createTextNode(famMem);

    // add text to the value attribute
    att.value = famMem;
    att1.value = famMem;

    // add attribute to element
    elm.setAttributeNode(att);
    elm.setAttributeNode(att1);

    // add text to element
    elm.appendChild(tex);

    // add element to form <select>
    document.getElementById("famMemC").appendChild(elm);

}
/*
//function to populate list onchange *Not used*
// Figure out how to loop through LS keys and DropDown Options to add new options only
function popList() {
    var optId = [],
        optCh = [];
    console.log(keyString);
    console.log(optId);

    //    Get the number of keys in local storage
    numOfKeys = localStorage.length;

    //    Get the name of keys in local storage
    keyString = [];
    for (j = 0; j < localStorage.length; j++) {
        keyString[keyString.length] = localStorage.key(j);
    }

    optList = document.getElementById("famMemC").children;
    console.log(keyString);
    console.log(optList);

    for (i = 0; i < optList.length; i++) {
        optId[optId.length] = optList[i].id
    }

    //    Populate localStorage key name to list
    //for (z = 0; z < keyString.length; z++) {

    for (w in optId) {
        for (v = 0; v < keyString.length; v++) {
            if (keyString[v] == w || optId[v] == "perm") {
                optCh[optCh.length] = true;
                //                    optId[optId.length] = optList[v].id;

            } else {
                optCh[optCh.length] = false;
                //        Name of key
                keyName = keyString[v];
                // variable to create element <option>
                var elm = document.createElement("option");

                // Variable to create attribute
                var att = document.createAttribute("value");
                var att1 = document.createAttribute("id");

                // variable to create elememnt/value text
                var tex = document.createTextNode(keyName);

                // add text to the value attribute
                att.value = keyName;
                att1.value = keyName;

                // add attribute to element
                elm.setAttributeNode(att);
                elm.setAttributeNode(att1);

                // add text to element
                elm.appendChild(tex);

                // add element to form <select>
                document.getElementById("famMemC").appendChild(elm);

            }
            console.log(optCh);
            console.log(optId);
        }
    }
    //}
}
*/
//function to get family member name for display function *DONE*
function getFamC() {
    famMemC = document.getElementById("famMemC").value;
    if (famMemC == "-Select Family Member-") {
        alert("Please select family member name.");
    }
    console.log(famMemC);
}
// function to retrieve family member from local storage *DONE*
function dispFam() {

    //    var obj, numOfKeys, getFamName, userList, userList1, keyString = [];

    //    Create lists to check against and add to return values
    userList1 = ["fName", "lName", "birthDay", "eMail", "phone", "address", "city", "state", "zipCode"];
    userList = [
        document.getElementById("fNameC").checked
        , document.getElementById("lNameC").checked
        , document.getElementById("birthDayC").checked
        , document.getElementById("eMailC").checked
        , document.getElementById("phoneC").checked
        , document.getElementById("addressC").checked
        , document.getElementById("cityC").checked
        , document.getElementById("stateC").checked
        , document.getElementById("zipCodeC").checked
    ];

    //    Get and parse localStorage key value
    getFamName = document.getElementById("famMemC").value;
    obj = localStorage.getItem(getFamName);
    myFamily = JSON.parse(obj);

    //    Check outputs
    console.log(myFamily);
    console.log(userList);
    console.log(outLine);

    //    Function to create string of values to output to user
    function lineOut() {

        for (i = 0; i < userList.length; i++) {
            if (userList[i] == true) {
                outLine[outLine.length] = userList1[i];
            }
        }
        for (x in myFamily) {
            for (i = 0; i < outLine.length; i++) {
                if (outLine[i] == x) {
                    outPut += myFamily[x] + " ";
                }
            }
        }
    }

    //    Call function
    callIt = lineOut();

    console.log(outPut);

    // variable to create element <option>
    var elm = document.createElement("option");

    // variable to create elememnt/value text
    var tex = document.createTextNode(outPut);

    // add text to element
    elm.appendChild(tex);

    // add element to form <select>
    document.getElementById("s1").appendChild(elm);

    // callIt = popList();
}
//function to remove family member from Option list *DONE*
function delFam() {
    getFamName = document.getElementById("famMemC").value;
    optList = document.getElementById("famMemC").children;
    localStorage.removeItem(getFamName);
    //    console.log(getFamName);
    //    console.log(optList);

    var optPar = document.getElementById("famMemC");
    var delOpt = document.getElementById(getFamName);
    //    console.log(optPar);
    //    console.log(delOpt);
    //    console.log(getFamName);
    optPar.removeChild(delOpt);
}
