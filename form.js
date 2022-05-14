const contactemail = document.querySelector('.form');
const error = document.querySelector('#error');
contactemail.addEventListener('submit', (e) => {
  let right = true;
  const Demail = document.querySelector('.email').value;
  const emailArray = Demail.split('');
  for (let i = 0; i < emailArray.length; i += 1) {
    if (
      Demail !== Demail.toLowerCase() &&
      emailArray[i] !== '@' &&
      emailArray[i] !== '.'
    ) {
      right = false;
    }
  }
  if (right) {
    error.innerHTML = '';
  } else {
    e.preventDefault();
    error.innerHTML = 'Please enter your email in lower case only';
  }
});
