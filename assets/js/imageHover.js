"use strict"

const column1 = document.querySelector('#on-hover-1');
column1.addEventListener('mouseenter', function () {
  const imageToShow = document.querySelector('.image1');
  imageToShow.classList.add('visible');
})
column1.addEventListener('mouseleave', function() {
    const imageToShow = document.querySelector('.image1');
    imageToShow.classList.remove('visible');
})

const column2 = document.querySelector('#on-hover-1');
column2.addEventListener('mouseenter', function () {
  const imageToShow = document.querySelector('.image2');
  imageToShow.classList.add('visible');
})
column2.addEventListener('mouseleave', function() {
    const imageToShow = document.querySelector('.image2');
    imageToShow.classList.remove('visible');
})

const column3 = document.querySelector('#on-hover-2');
column3.addEventListener('mouseenter', function () {
  const imageToShow = document.querySelector('.image3');
  imageToShow.classList.add('visible');
})
column3.addEventListener('mouseleave', function() {
    const imageToShow = document.querySelector('.image3');
    imageToShow.classList.remove('visible');
})

const column4 = document.querySelector('#on-hover-2');
column4.addEventListener('mouseenter', function () {
  const imageToShow = document.querySelector('.image4');
  imageToShow.classList.add('visible');
})
column4.addEventListener('mouseleave', function() {
    const imageToShow = document.querySelector('.image4');
    imageToShow.classList.remove('visible');
})

const column5 = document.querySelector('#on-hover-2');
column5.addEventListener('mouseenter', function () {
  const imageToShow = document.querySelector('.image5');
  imageToShow.classList.add('visible');
})
column5.addEventListener('mouseleave', function() {
    const imageToShow = document.querySelector('.image5');
    imageToShow.classList.remove('visible');
})