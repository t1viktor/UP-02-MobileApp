document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.querySelector('#first-name');
    const lastName = document.querySelector('#last-name');
    const membershipEmail = document.querySelector('#membership-email');
    const phone = document.querySelector('#phone');
    const membershipPassword = document.querySelector('#membership-password');
    const membershipConfirmPassword = document.querySelector('#membership-confirm-password');
    const formValid = document.querySelector('#form');
    const errorSpan = document.querySelector('span'); 

    formValid.addEventListener('submit', function(e){
        e.preventDefault();
        validInputs();
    });

    function validInputs(){
        const userNameValue = firstName.value.trim();
        const surNameValue = lastName.value.trim();
        const emailValue = membershipEmail.value.trim();
        const telValue = phone.value.trim();
        const passValue = membershipPassword.value.trim();
        const confirmPassValue = membershipConfirmPassword.value.trim();
        let isValid = true;
        clearErrors();


        if(userNameValue === ''){
            setError(firstName, 'O nome de usuario é obrigatório');
            isValid = false;
        } else {
            setSuccess(firstName);
        }

        if(surNameValue === ''){
            setError(lastName, 'O sobrenome é obrigatório');
            isValid = false;
        } else {
            setSuccess(lastName);
        }

        if(emailValue === ''){
            setError(membershipEmail, 'O email é obrigatorio');
            isValid = false;
        } else if (!isValidEmail(emailValue)){
            setError(membershipEmail, 'Por favor, insira um email válido.');
            isValid = false;
        } else {
            setSuccess(membershipEmail);
        }

        if(telValue === ''){
            setError(phone, 'O telefone é obrigatório');
            isValid = false;
        } else if(!isValidPhone(telValue)){
            setError(phone, 'Por favor, insira um numero valido');
            isValid = false;
        } else {
            setSuccess(phone);
        }

        if(passValue === ''){
            setError(membershipPassword, 'A senha é obrigatória');
            isValid = false;
        } else if (passValue.length < 8 ){
            setError(membershipPassword, 'A senha precisa ter no mínimo 8 caracteres');
            isValid = false;
        } else {
            setSuccess(membershipPassword);
        }

        if(confirmPassValue === ''){
            setError(membershipConfirmPassword, 'A confirmaçao de senha é obrigatória');
            isValid = false;
        } else if(confirmPassValue !== passValue){
            setError(membershipConfirmPassword, 'As senhas não conferem');
            isValid = false;
        } else {
            setSuccess(membershipConfirmPassword);
        }

        if(isValid){
            document.querySelector('.section-02').style.display= 'flex'
            document.querySelector('.confirm-email').style.display= 'flex'

        }
    }

    function isValidPhone(phone) {
        const phoneRegex = /^(?:\+\d{2})?(?:\d{2}|\d{3})?\d{4,5}\d{4}$/;
        return phoneRegex.test(phone);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function setError(input, message) {
        input.classList.add('error');
        errorSpan.innerText = message;
        errorSpan.style.display = 'block'; 
    }

    function setSuccess(input) {
        input.classList.remove('error');
    }

    function clearErrors() {
        const inputs = [firstName, lastName, membershipEmail, phone, membershipPassword, membershipConfirmPassword];
        inputs.forEach(input => input.classList.remove('error'));

        errorSpan.style.display = 'none';
        errorSpan.style.color = '#ff1900';
        errorSpan.innerText = '';
       
    }
});