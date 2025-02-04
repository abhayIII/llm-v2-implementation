// Smooth Scrolling Navigation
console.log('JavaScript file loaded');

// Form Validation
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Invalid email address');
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    showError(messageInput, 'Message is required');
    isValid = false;
  }

  if (isValid) {
    // Submit form data
    console.log('Form submitted successfully!');
    form.reset();
  }
});

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add('error');
  const errorMessage = formControl.querySelector('small');
  errorMessage.textContent = message;
}

function clearErrors() {
  const formControls = form.querySelectorAll('.form-control');
  formControls.forEach(formControl => {
    formControl.classList.remove('error');
    const errorMessage = formControl.querySelector('small');
    errorMessage.textContent = '';
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
// Add this line to ensure the mobile menu is hidden initially
mobileMenu.style.display = 'none';

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('fa-bars');
  menuToggle.classList.toggle('fa-times');
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling Navigation
const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1); // Remove the '#' symbol

    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(targetId); // Use getElementById instead of querySelector

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      } else {
        console.error(`Element with ID "${targetId}" not found.`);
      }
    }

    // Close mobile menu after clicking a link
    if (mobileMenu.style.display === 'flex') {
      menuToggle.classList.toggle('fa-bars');
      menuToggle.classList.toggle('fa-times');
      mobileMenu.style.display = 'none';
    }
  });
});