var codeslist = [
    'V6WEAQ62','NLBVKD6Y','6UXL4LNU','ESPT3C7Q','H5QK9KKQ','HM6BPY3G','7SSQTUJ2','9RDWJUJ2','VVMQBALS','3FAMTAYG',
    'GWF2JQFW','UVMBNFG4','J6ZN36NZ','97HW42SR','88Z3G7S9','2ZD9R33Z','V36XX3XW','9N4EHR3J','BFHPTBME','2DLERYMN',
    '2EWPE6SM','NR66KTYS','PWDQX9RK','ZHHT5L7D','YU4VWV92','X3K3U82S','X8CZG3A7','XD2ZGD5Y','LUHV7KM8','M6GSGR42',
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