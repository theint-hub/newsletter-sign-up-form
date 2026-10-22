const subscribeForm = document.getElementById("subscribe-form");
const email = document.getElementById("email");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");
const mainWrapper = document.getElementById("main-wrapper");
const subscribeWrapper = document.getElementById("subscribe-wrapper");
const emailError = document.getElementById("email-error");

function clearError(){
    emailError.textContent="";
    email.classList.remove("input-error");
    email.setAttribute("aria-invalid", "false");
}

subscribeForm.addEventListener("submit",(e) => {
    e.preventDefault();
    if(!email.validity.valid){
        emailError.textContent = "Valid email required";
        email.classList.add("input-error");
        email.setAttribute("aria-invalid", "true");
        return;
    }
    clearError();
    mainWrapper.classList.add("hidden");
    subscribeWrapper.classList.remove("hidden");
    userEmail.textContent = email.value;
});

email.addEventListener("input", clearError);

dismissBtn.addEventListener("click", () => {
    subscribeWrapper.classList.add("hidden");
    mainWrapper.classList.remove("hidden");
    email.value = "";
    clearError();
});