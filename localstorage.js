let StudentlInformation = {};
function contact() {
  StudentlInformation = {
    username: document.querySelector('#name').value,
    email: document.querySelector('.email').value,
    text: document.querySelector('#message').value,
  };

  localStorage.setItem('MyList', JSON.stringify(StudentlInformation));
}
const checkLocalStorage = localStorage.getItem('contactForm');

// if (checkLocalStorage) {
//   document.querySelector('#name').value = JSON.parse(checkLocalStorage).username;
//   document.querySelector('.email').value = JSON.parse(checkLocalStorage).email;
//   document.querySelector('#message').value = JSON.parse(checkLocalStorage).text;
// } else {
//   document.querySelector('#name').onchange = () => {
//     contact();
//   };
//   document.querySelector('.email').onchange = () => {
//     contact();
//   };
//   document.querySelector('#message').onchange = () => {
//     contact();
//   };
// }
//
