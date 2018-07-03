var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png.jpg') {
      myImage.setAttribute ('src','images/firefox-icon.png.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox2.png.jpg');
    }
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png.jpg') {
      myImage.setAttribute ('src','images/firefox2.png.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png.jpg');
    }
}

myVariable = 'Bob';
var myVariable = 'Bob';
myVariable = 'Steve';

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, You found My page about Mika!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

var myVariable = document.querySelector('h1');
alert('By the way, I do not understand why babies cry!');

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

multiply(4,7);
multiply(20,20);
multiply(0.5,3);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mika is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mika is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}