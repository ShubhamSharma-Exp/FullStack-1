const submitBtn = document.querySelector("#submit-btn");
const userInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const messages = document.querySelectorAll(".message");
const regexUsername = /^[a-z]+$/m;
const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/;

const inputsArray = [userInput, emailInput, password1, password2];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (var input of inputsArray) {
    if (input.value === "") {
      input.classList = "fail";
      input.parentNode.childNodes[5].classList.remove("hide");
      messages.forEach((message) => {
        if (message.classList.contains(input.id)) {
          message.textContent = input.id + " cannot be empty";
          message.classList.remove("hide");
          message.classList.add("fail-cross");
        }
      });
    } else if (input.classList.contains("fail")) {
      input.classList.remove("fail");
      input.parentNode.childNodes[5].classList.add("hide");
      messages.forEach((message) => {
        if (message.classList.contains(input.id)) {
          message.textContent = "";
          message.classList.add("hide");
          message.classList.remove("fail-cross");
        }
      });
    }

    if (input.value !== "" && input.id === "username") {
      if (regexUsername.test(input.value)) {
        input.parentNode.childNodes[3].classList.remove("hide");
        input.classList = "success";
        messages.forEach((message) => {
          if (message.classList.contains(input.id)) {
            message.textContent = "";
            message.classList.remove("hide");
          }
        });
      } else {
        input.parentNode.childNodes[3].classList.add("hide");
        input.parentNode.childNodes[5].classList.remove("hide");
        input.classList = "fail";
        messages.forEach((message) => {
          if (message.classList.contains(input.id)) {
            message.textContent = "Invalid input";
            message.classList.remove("hide");
            message.classList.add("fail-cross");
          }
        });
      }
    }

    if (input.value !== "" && input.id === "email") {
      if (regexEmail.test(input.value)) {
        input.parentNode.childNodes[3].classList.remove("hide");
        input.classList = "success";
        messages.forEach((message) => {
          if (message.classList.contains(input.id)) {
            message.textContent = "";
            message.classList.remove("hide");
          }
        });
      } else {
        input.parentNode.childNodes[3].classList.add("hide");
        input.parentNode.childNodes[5].classList.remove("hide");
        input.classList = "fail";
        messages.forEach((message) => {
          if (message.classList.contains(input.id)) {
            message.textContent = "Invalid email";
            message.classList.remove("hide");
            message.classList.add("fail-cross");
          }
        });
      }
    }

    if (input.value !== "" && input.id === "password1") {
      input.parentNode.childNodes[3].classList.remove("hide");
      input.classList = "success";
    }

    if (input.value !== "" && input.id === "password2") {
      if (input.value === password1.value) {
        input.parentNode.childNodes[3].classList.remove("hide");
        messages.forEach((message) => {
          if (message.classList.contains(input.id))
            message.classList.add("hide");
        });
        input.classList = "success";
      } else {
        input.parentNode.childNodes[3].classList.add("hide");
        input.parentNode.childNodes[5].classList.remove("hide");
        input.classList = "fail";
        messages.forEach((message) => {
          if (message.classList.contains(input.id)) {
            message.textContent = "Password does not match";
            message.classList.remove("hide");
            message.classList.add("fail-cross");
          }
        });
      }
    }
  }
});
