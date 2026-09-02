let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userTel = document.querySelector("#tel");
let userAge = document.querySelector("#age");
let submitBtn = document.querySelector("#btn");

let displayedName = document.querySelector("#username");
let displayedEmail = document.querySelector("#useremail");
let displayedAge = document.querySelector("#userage");
let displayedTel = document.querySelector("#usertel");
let displayedcard = document.querySelector(".dataCard");
let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    displayedcard.style.display = "block";
    displayedName.innerHTML = userName.value;
    displayedEmail.innerHTML = userEmail.value;
    displayedAge.innerHTML = userAge.value;
    displayedTel.innerHTML = userTel.value;
}
)


