const cityField = document.getElementById("city");
const stateField = document.getElementById("state");
const countryField = document.getElementById("country");

const inputs = Array.from(document.querySelectorAll("input[type='text']"));

inputs.forEach((el) => {
    el.addEventListener("input", () => {
      validateInput(el);
    });
});

const validateInput = (el) => {
  let name = el.getAttribute("id");
  let errorEl = document.querySelector(`.${name}-error`);
  
  if (el.validity.valid) {
    errorEl.textContent = "";
    errorEl.classList.remove("active");
  } else {
    let errorMessage = findError(el);
    errorEl.textContent = errorMessage;
    errorEl.classList.add("active");
  }
}

const findError = (el) => {
  if (el.validity.patternMismatch) {
    return 'Please enter a 2-letter state code (e.g. "NY")';
  } else {
    return "This field is required.";
  }
}

export { cityField, stateField, countryField, inputs, validateInput };