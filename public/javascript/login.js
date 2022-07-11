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
  console.log('signup');
    const username = document.querySelector('#username-signup').value.trim();
    const firstname = document.querySelector('#firstname-signup').value.trim();
    const lastname = document.querySelector('#lastname-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const phonenumber = document.querySelector('#phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const dogname = document.querySelector('#dogname-signup').value.trim();
    const dogbreed = document.querySelector('#dogbreed-signup').value.trim();
    const dogweight = document.querySelector('#dogweight-signup').value.trim();
    const male = document.querySelector('#male')
    const female = document.querySelector('#female')?.value.trim();
    const sex = male.checked ? 'male' : 'female'

    if (username && firstname && lastname && email && phonenumber && password && dogname && dogbreed && dogweight && sex ){
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, firstname, lastname, email, phonenumber, password, dogname, dogbreed, dogweight, sex }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    } else {alert ('please fill out all fields')};
  };
  
  document
    .querySelector('.login-form')
    ?.addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    ?.addEventListener('submit', signupFormHandler);
  