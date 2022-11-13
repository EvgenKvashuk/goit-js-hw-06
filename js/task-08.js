const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (const [name, value] of formData.entries()) {
        if (value.trim() === "") {
            return alert("всі поля повинні бути заповнені");
        }
    }
    
    const dataObj = {};

    for (let element of event.currentTarget.elements) {
        if (element.name) dataObj[element.name] = element.value;
      }
    console.log(dataObj);
    event.currentTarget.reset();
}