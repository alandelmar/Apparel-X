// Input validation for contact form

function contactFormValidation() {

    var userNameInputCommentsBox = document.getElementById("userNameInputCommentsBox").value;

    var commentsBoxNameValidator = document.getElementById("commentsBoxNameValidator");

    if (userNameInputCommentsBox === "" || userNameInputCommentsBox === " ") {
        commentsBoxNameValidator.innerHTML = "Please enter a name";
        commentsBoxNameValidator.style.color = "red";
    } else {
        commentsBoxNameValidator.innerHTML = "Name is valid";
        commentsBoxNameValidator.style.color = "green";
    }


    var commentsBox = document.getElementById("commentsBox").value;

    var commentsBoxTextValidator = document.getElementById("commentsBoxTextValidator");

    if (commentsBox === "" || commentsBox === " ") {
        commentsBoxTextValidator.innerHTML = "Please enter some text";
        commentsBoxTextValidator.style.color = "red";
    } else {
        commentsBoxTextValidator.innerHTML = "Thank you for your message";
        commentsBoxTextValidator.style.color = "green";
    }


    var userEmailInputCommentsBox = document.getElementById("userEmailInputCommentsBox").value;

    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;

    var commentsBoxEmailValidator = document.getElementById("commentsBoxEmailValidator");

    if (userEmailInputCommentsBox !== "" && emailRegex.test(userEmailInputCommentsBox)) {
        commentsBoxEmailValidator.innerHTML = "Email Address is valid";
        commentsBoxEmailValidator.style.color = "green";
    } else if (userEmailInputCommentsBox === "") {
        commentsBoxEmailValidator.innerHTML = "Please enter an email address";
        commentsBoxEmailValidator.style.color = "red";
    } else {
        commentsBoxEmailValidator.innerHTML = "Email Address is not valid";
        commentsBoxEmailValidator.style.color = "red";
    }
}
