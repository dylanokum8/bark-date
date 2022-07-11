const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phonenumber = document.querySelector('#phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const dogname = document.querySelector('#dogname-signup').value.trim();
    const dogbreed = document.querySelector('#dogbreed-signup').value.trim();
    const dogweight = document.querySelector('#dogweight-signup').value.trim();
    const male = document.querySelector('#male-signup').value.trim();
    const female = document.querySelector('#female-signup').value.trim();
  
    if (username && firstname && lastname && email && phonenumber && password && dogname && dogbreed && dogweight && male && female) {
      const response = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({ username, firstname, lastname, email, phonenumber, password, dogname, dogbreed, dogweight, male, female }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  