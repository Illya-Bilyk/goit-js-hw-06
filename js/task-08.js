const formRef = document.querySelector('.login-form');

const submitFunc = event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert("You didn't fill all fields, DO THIS NOW !!!");
  }

  const form = {
    email: email.value,
    password: password.value,
  };

  console.log(form);
  formRef.reset();
};

formRef.addEventListener('submit', submitFunc);
