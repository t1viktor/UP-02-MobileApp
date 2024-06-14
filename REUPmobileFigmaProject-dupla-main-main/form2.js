
document.querySelector('.section-03 form').addEventListener('submit', function(e) {
    e.preventDefault();

    let emailInput = document.querySelector('#forgot-password-email');
    let emailValue = emailInput.value.trim();
    let isValid = true; 

    if (emailValue === '') {
        setError(emailInput, 'Insira um email');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Por favor insira um email válido');
        isValid = false;
    } else {
        setSuccess(emailInput);
    }

    if (isValid) {
        document.querySelector('.section-03').style.display = 'none';
        document.querySelector('.section-04').style.display = 'flex';
    }
});


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
}

document.querySelector('.section-04 form').addEventListener('submit', function(e) {
    e.preventDefault();

    const passInput = document.querySelector('#reset-password')
    const confirmPassInput = document.querySelector('#confirm-password')

    const passInputvalue = passInput.value.trim();
    const confirmPassInputValue = confirmPassInput.value.trim();
    let isValid = true; 


    if(passInputvalue === ''){
        setError(passInput, 'A senha é obrigatória');
        isValid = false;
    } else if (passInputvalue.length < 8 ){
        setError(passInput, 'A senha precisa ter no mínimo 8 caracteres');
        isValid = false;
    } else {
        setSuccess(passInput);
    }

    if(confirmPassInputValue === ''){
        setError(confirmPassInput, 'A confirmaçao de senha é obrigatória');
        isValid = false;
    } else if(confirmPassInputValue !== passInputvalue){
        setError(confirmPassInput, 'As senhas não conferem');
        isValid = false;
    } else {
        setSuccess(confirmPassInput);
    }
    
    if(isValid){
        document.querySelector('.section-04').style.display = 'none';
        document.querySelector('.home-img').style.display = 'flex';
        document.querySelector('.home-01').style.display = 'flex';
    }
})
function setError(input, message) {
    let errorSpan = input.nextElementSibling; 
    errorSpan.innerText = message;
    errorSpan.style.display = 'block'; 
    errorSpan.style.color = '#ff1900'
}

function setSuccess(input) {
    let errorSpan = input.nextElementSibling; 
    input.classList.remove('error');
    errorSpan.style.display = 'none'; 
}
