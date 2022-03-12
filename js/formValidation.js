const btn = document.querySelector('.btn_submit');

function handleClick() {
    let isError = false;
    let userName = document.querySelector('#name').value;
    let userEmail = document.querySelector('#email').value;
    let userMessage = document.querySelector('#message').value;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userName === '') {
        document.querySelector('.required-name').style.display = 'flex';
        isError = true;
    } else {
        document.querySelector('.required-name').style.display = 'none';
        isError = false;
    }

    if (userEmail === '') {
        document.querySelector('.required-email').style.display = 'flex';
        document.querySelector('.isValidEmail').style.display = 'none';
        isError = true;
    } else {
        document.querySelector('.required-email').style.display = 'none';
        isError = false;
        if (!userEmail.match(mailFormat)) {
            document.querySelector('.isValidEmail').style.display = 'flex';
            isError = true;
        }
    }

    if (userMessage === '') {
        document.querySelector('.required-message').style.display = 'flex';
        isError = true;
    } else {
        document.querySelector('.required-message').style.display = 'none';
        isError = false;
    }

    /*
    if (isError) {
        alert('Your form has encountered a problem. Please scroll down to review.')
    }
    */
}

btn.addEventListener('click', handleClick);


