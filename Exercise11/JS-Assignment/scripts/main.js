var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    document.getElementById("p1_fullName").innerHTML = firstName + " " + lastName;

    var completeName = "";
    if (firstName.length !== 0 && lastName.length !== 0) {
        completeName = true;
    } 
    
    else {
        completeName = false;
    }

    document.getElementById("p1_valid").innerHTML = completeName;


    document.getElementById("p1_fullNameLength").innerHTML = firstName.length + lastName.length;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    document.getElementById("p2_email").innerHTML = emailAddress;
   
    var validEmail = "emailAddress".indexOf("@");

    if (validEmail > 0) {
        validEmail = "true";
    }
    else {
        validEmail = "false";
    }

    document.getElementById("p2_valid").innerHTML = validEmail;

    document.getElementById("p2_emailLength").innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    document.getElementById("p3_number").innerHTML = randomNumber;

    validNumber = parseInt("randomNumber");
    
    if(validNumber > 0){
        validNumber = "false";
    }
    else {
        validNumber = "true";
    }

    document.getElementById("p3_valid").innerHTML = validNumber;


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);


arrayItems.push("arrayInput");
var p4_arrayLength = arrayItems.length;
document.getElementById("p4_arraylength").innerHTML = p4_arrayLength;

document.getElementById("p4_valid").innerHTML = arrayInput;







    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}