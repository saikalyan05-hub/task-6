document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const overlay = document.getElementById('overlay');
  const successMessage = document.getElementById('successMessage');

  // Reset error display
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';

  let isValid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === '') {
    nameError.style.display = 'block';
    isValid = false;
  }

  if (!emailPattern.test(email)) {
    emailError.style.display = 'block';
    isValid = false;
  }

  if (message === '') {
    messageError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('contactForm').reset();
    successMessage.textContent = 'Your message has been sent!';
    overlay.style.display = 'flex';
  }
});

// Close modal on button click
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
});
