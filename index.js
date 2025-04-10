document.getElementById('submit-button').addEventListener('click', (event) => {

    let formIsValid = true;

    const nameInputs = document.querySelectorAll('.input-name');

    nameInputs.forEach((input) => {
        const errorMessage = input.nextElementSibling; 

        if (input.value === '') {
            errorMessage.innerHTML = 'This field is required.'; 
            input.classList.add('input-empty')
            errorMessage.classList.add('red')
             formIsValid = false;
        } else {
            input.classList.remove('input-empty')
            errorMessage.innerHTML = '';  
        }
    })

    const email = document.querySelectorAll('.input-email')    

    email.forEach((input) => {
        const errorMessage = input.nextElementSibling

        if (input.value === '' || !input.value.includes('@')) {
            errorMessage.innerHTML = 'Please input an valid email address.'
            input.classList.add('input-empty')
            errorMessage.classList.add('red')
             formIsValid = false;
        } else {
            input.classList.remove('input-empty')
            errorMessage.innerHTML = ''
        }
    })

    const message = document.querySelectorAll('.message')    

    message.forEach((input) => {
        const errorMessage = input.nextElementSibling

        if (input.value === '') {
            errorMessage.innerHTML = 'This field is required.'
            input.classList.add('input-empty')
            errorMessage.classList.add('red')
             formIsValid = false;
        } else {
            input.classList.remove('input-empty')
            errorMessage.innerHTML = ''
        }
    })

    //consent

    const checkbox = document.querySelectorAll('#consent')    

    checkbox.forEach((input) => {
        const errorMessage = document.querySelector('.submit-form')

        if (!input.checked) {
            errorMessage.innerHTML = 'To submit this form, plese consent to being contacted.'
            input.classList.add('input-empty')
            errorMessage.classList.add('red')
             formIsValid = false;
        } else {
            input.classList.remove('input-empty')
            errorMessage.innerHTML = ''
        }
    })

    const radios = document.querySelectorAll('.query-type-button');
    const errorMessage = document.querySelector('.select-query');

    let algumSelecionado = false;

    radios.forEach((input) => {
    if (input.checked) {
        algumSelecionado = true;
    }
    });

    if (!algumSelecionado) {
        errorMessage.innerHTML = 'Please select a query type.';
        errorMessage.classList.add('red');
        radios.forEach((input) => {
            input.classList.add('input-empty');
             formIsValid = false;
    });
    
    } else {
        errorMessage.innerHTML = '';
        errorMessage.classList.remove('red');
        radios.forEach((input) => {
            input.classList.remove('input-empty');
        });
    }

    if (formIsValid) {
        Swal.fire({
            title: 'Message sent!',
            text: "Thanks for completing the form. We'll be in touching soon",
            icon: 'success',
            background: '#f0f0f0', 
            confirmButtonColor: '#3085d6',
            timer: 3000
          });
    }

})

