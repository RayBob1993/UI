const form = document.getElementById('form');



form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('[name="name"]');
    const surname = document.querySelector('[name="surname"]');
    const age = document.querySelector('[name="age"]');
    const gender = document.querySelector('[name="gender"]');

    const formData = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        gender: gender.value
    }

    if (form.checkValidity()) {
        fetch('https://dummyjson.com/products/add', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    }
});