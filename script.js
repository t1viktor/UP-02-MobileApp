document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('.form');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const createMenber = document.querySelector('.member')
    const forgotPassword = document.querySelector('#ForgotPassword')
    const forgotPasswordConfirm = document.querySelector('#forgot-password-email')

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        let emailValue = email.value.trim();
        let passValue = password.value.trim();
        let isValid = true;

        if (emailValue === '') {
            setError(email, 'O email é obrigatório.');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Por favor, insira um email válido.');
            isValid = false;
        } else {
            setSuccess(email);
        }

        if (passValue === '') {
            setError(password, 'A senha é obrigatória.');
            isValid = false;
        } else if (passValue.length < 8) {
            setError(password, 'A senha precisa ter no mínimo 8 caracteres.');
            isValid = false;
        } else {
            setSuccess(password);
        }

        if (isValid) {
           
            document.querySelector('.main-img').style.display = 'none';
            document.querySelector('.bola').style.display = 'none';
            document.querySelector('.section-01').style.display = 'none';
            document.querySelector('.home-img').style.display = 'flex';
            document.querySelector('.home-01').style.display = 'flex';
        }
    }

    function setError(input, message) {
        let formControl = input.parentElement;
        let small = formControl.querySelector('small');

        small.innerText = message;
        formControl.className = "form-control error";
    }

    function setSuccess(input) {
        let formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    }




document.querySelector('#createMember').addEventListener('click', function(e){
        e.preventDefault


    let emailValue = email.value.trim();
    let passValue = password.value.trim();

    if (emailValue === '' || passValue === '') {

        document.querySelector('.main-img').style.display = 'none';
        document.querySelector('.bola').style.display = 'none';
        document.querySelector('.section-01').style.display = 'none';
        document.querySelector('.section-02').style.display = 'flex';

}
})

document.querySelector('#ForgotPassword').addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector('.main-img').style.display = 'none';
        document.querySelector('.bola').style.display = 'none';
        document.querySelector('.section-01').style.display = 'none';
        document.querySelector('.section-03').style.display = 'flex';

})


});
