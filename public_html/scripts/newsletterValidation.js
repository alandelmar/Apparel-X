// Input validation for Newsletter Signup

function newsletterValidator() {

            var userName = document.getElementById("userNameInput").value;

        
            var nameMessage = document.getElementById("nameMessage");

            if (userName === "" || userName === " ") {
                nameMessage.innerHTML = "Please enter a name";
                nameMessage.style.color = "red";
            } else {
                nameMessage.innerHTML = "Name is valid";
                nameMessage.style.color = "green";
            }
        
            var userEmail = document.getElementById("userEmailInput").value;

            var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|ie|uk)\b$/;

            var emailMessage = document.getElementById("emailMessage");

            if (userEmail !== "" && emailRegex.test(userEmail)) {
                emailMessage.innerHTML = "Email Address is valid";
                emailMessage.style.color = "green";
            } else if (userEmail === "") {
                emailMessage.innerHTML = "You did not enter an Email Address!";
                emailMessage.style.color = "red";
            } else {
                emailMessage.innerHTML = "Email Address is not valid";
                emailMessage.style.color = "red";
            }
        }