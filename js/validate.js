const email = document.getElementById("email");

email.addEventListener('input',()=>{
  const emailBox = document.querySelector('.emailBox');
  const emailText = document.querySelector('.emailText');
  const emailError = document.querySelector('.container__article--picture');
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
  const active = document.getElementById('email')

  if(email.value.match(emailPattern)){
    emailBox.classList.add('valid');
    emailBox.classList.remove('invalid');
    emailError.classList.add('valid');
    emailError.classList.remove('invalid');
    emailText.innerHTML = "Your email Address is valid"
    active.style.border="2px solid #4f7df3"
}else{
    emailBox.classList.add('invalid');
    emailError.classList.remove('valid');
    emailError.classList.add('invalid');
    emailBox.classList.remove('valid');
    emailText.innerHTML = "Please provide a valid email address"
    active.style.border="2px solid #f96262"
}
})
