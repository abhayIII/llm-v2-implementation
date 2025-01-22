// main.js

// Smooth Scrolling Navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  });
});

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
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Feature Card Animation
const featureCards = document.querySelectorAll('.feature-card');

window.addEventListener('scroll', () => {
  featureCards.forEach(card => {
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardPosition < windowHeight * 0.8) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
});