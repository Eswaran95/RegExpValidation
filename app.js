// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('pan').addEventListener('blur', validatePan);
document.getElementById('passport').addEventListener('blur', validatePassport);
document.getElementById('age').addEventListener('blur', validateAge);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    
    if(!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
	name.classList.add('is-valid');
    }
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}[0-9]?$/;
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');
  } else {
    zip.classList.remove('is-invalid');
    zip.classList.add('is-valid');
  }
}


function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\d{10}$/;
  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
  }
}

function validatePan() {
    const pan = document.getElementById('pan');
    const re = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

    if(!re.test(pan.value)) {
        pan.classList.add('is-invalid');
    } else {
        pan.classList.remove('is-invalid');
        pan.classList.add('is-valid');
    }
}

function validatePassport() {
    const passport = document.getElementById('passport');
    const re = /^\d{10}$/;

    if(!re.test(passport.value)) {
        passport.classList.add('is-invalid');
    } else {
        passport.classList.remove('is-invalid');
        passport.classList.add('is-valid');
    }
}
function validateAge() {
    var age = document.getElementById('age');


    if(age.value < 18) {
        age.classList.add('is-invalid');
    } else {
        age.classList.remove('is-invalid');
        age.classList.add('is-valid');
    }
}
