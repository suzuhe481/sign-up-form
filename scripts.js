// Checks to see if the password fields are equal.
// After either input is unfocused, places a red border around them.
function passwordCheck() {
    const errorBorder = "2px solid red"

    defaultBorder = getDefaultBorder();

    pass1 = document.getElementById("password");
    pass2 = document.getElementById("password-confirm");
    errorMessageDisplay = document.getElementById("password-error")

    if (pass1.value != pass2.value) {
        pass1.style.border = errorBorder;
        pass2.style.border = errorBorder;
        errorMessageDisplay.style.display = "block";
    }
    else {
        pass1.style.border = defaultBorder;
        pass2.style.border = defaultBorder;
        errorMessageDisplay.style.display = "none";
    }
}

// Gets the default border style of element with id, "first-name".
function getDefaultBorder() {
    e = document.getElementById("first-name");
    e_styles = getComputedStyle(e);
    defaultBorder = e_styles.getPropertyValue("border");

    return defaultBorder;
}