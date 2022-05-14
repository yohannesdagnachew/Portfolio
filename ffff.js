const containerform = document.querySelector('.input');
const error = document.querySelector('#error');
containerform.addEventListener('submit', (e) => {
  let right = true;
  const Demail = document.querySelector('#Email').value;
  const emailArray = Demail.split('');
  for (let i = 0; i < emailArray.length; i += 1) {
    if (
      Demail !== Demail.toLowerCase()
             && emailArray[i] !== '@' && emailArray[i] !== '.'
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
white_check_mark
eyes
raised_hands









