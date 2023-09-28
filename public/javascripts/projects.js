/*
File Name: projects.js
Student's Name: Yang Qi
Student ID: 301263107
Date: 09/28/2023
*/

// JavaScript for the project gallery

// Get the project slides and navigation buttons
const slides = document.querySelectorAll('.project-slide');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentSlide = 0;

// Show the initial slide
showSlide(currentSlide);

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Event listener for the "Previous" button
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
