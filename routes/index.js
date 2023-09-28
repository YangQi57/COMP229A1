/*
File Name: index.js
Student's Name: Yang Qi
Student ID: 301263107
Date: 09/28/2023
*/
const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// About Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

// Projects Page
router.get('/projects', (req, res) => {
  const projects = [
    {
      title: 'Literature Review of Machine Learning Models',
      description: 'Conducted a literature review to evaluate machine learning models for screening job applicants based on their resumes and cover letters. Compared three machine learning models and determined the most suitable one for ranking 100+ applicants, selecting the top 10 candidates.',
      image: '/images/project1.png',
    },
    {
      title: 'Portfolio Trailmap Dashboard (PowerBI)',
      description: 'Contributed to enhancing the Portfolio Trailmap PowerBI dashboard by researching Row-Level Security (RLS), performing data cleaning tasks, and improving overall functionality.',
      image: '/images/project2.png',
    },
    {
      title: 'Executive Scorecard Dashboard (PowerBI)',
      description: 'Provided ideas and assistance for an Executive Scorecard dashboard in PowerBI. Enhanced the dashboard with valuable insights and improved data visualization.',
      image: '/images/project3.png',
    },
  ];
  res.render('projects', { title: 'Projects', projects });
});

// Services Page
router.get('/services', (req, res) => {
  const services = [
    {
      title: 'Web Development',
      description: 'I specialize in creating responsive and user-friendly websites tailored to your business needs. With a background in Software Engineering and experience at the Ministry of Natural Resources and Forestry, we have the technical skills and expertise to develop innovative web solutions. Our proficiency in a wide range of computer software, including Power BI, Congos, Excel, and more, ensures top-notch results.',
      image: '/images/service1.png',
    },
    {
      title: 'Mobile App Development',
      description: "I can build feature-rich mobile applications for both iOS and Android platforms. With a background as a Web Developer at UTPA High School, we understand the importance of user engagement and can translate that knowledge into creating exceptional mobile apps.",
      image: '/images/service2.png',
    },
    {
      title: 'Data Analysis and Power BI Dashboards',
      description: 'I offer expertise in data analysis and Power BI dashboard development. With experience at the Ministry of Natural Resources and Forestry, we have a strong background in preparing reports and presentations using Power BI, Excel, and other data analysis tools. We can help you derive valuable insights from your data and create interactive dashboards to drive data-informed decisions.',
      image: '/images/service3.png',
    },
  ];
  res.render('services', { title: 'Services', services });
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Me' });
});

// Form Submission
router.post('/submit-contact', (req, res) => {
  // Here, you can access the form data from req.body
  const { firstName, lastName, contactNumber, email, message } = req.body;
  console.log('Received user input:');
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Contact Number:', contactNumber);
  console.log('Email:', email);
  console.log('Message:', message);

  // Redirect back to the Home Page
  res.redirect('/');
});

module.exports = router;
