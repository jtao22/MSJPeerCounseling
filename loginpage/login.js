var codeslist = [
    //left empty for privacy
];
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}
function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

function codeExist(input){
    for (var i = 0; i < 30; i++){
        if (input == codeslist[i]){
            return true;
        }
    }
    return false;
}
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    var success;

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        if (!success){
            setFormMessage(loginForm, "error", "Invalid Code!");
        }
        else{
            window.location.replace("https://msjpc-live-chat.netlify.app/");
        }
    });
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {    
            if (codeExist(e.target.value)){
                success = true;
            }
            else{
                success = false;
            }
        });
    });
});
