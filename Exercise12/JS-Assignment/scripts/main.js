function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.

    var messages = [];

    //If first name is empty. Add it to the array
    var firstName = getValue("firstName");

    if (firstName.length === 0) {
        messages.push("First Name is required");
    }

    //If last name is empty. Add it to the array
    var lastName = getValue("lastName");

    if (lastName.length === 0) {
        messages.push("Last Name is required");
    }

    //Email is empty. Add it to the array
    var emailAddress = getValue("emailAddress");

    if (emailAddress.length === 0) {
        messages.push("Email is required");
    }
    console.log(messages);

    //Loop through array
    for (var i = 0; i < messages.length; i++) {
        document.getElementById("error-list").innerHTML += messages[i];
    }

    //Create javascript object for the user

    var user = {
        firstname: getValue("firstName"),
        lastname: getValue("lastName"),
        email: getValue("emailAddress"),
        fullName: function () {
            return this.firstname + " " + this.lastname;
        }

    };

    //log the user object to the console
    console.log(user);

    //Check to see if everything is valid

    if (messages.length === 0) {
        var submittedDate = new Date();
        var printSubmit = submittedDate.toString();
        var printAlert = "Submitted on " + printSubmit;
        alert(printAlert);
    }
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.

    //Make the alert box.


    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}