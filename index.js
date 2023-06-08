

// Get the button element
var button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Generate random numbers for the dice
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Get the left and right image elements
  var leftImg = document.querySelector('.img1');
  var rightImg = document.querySelector('.img2');

  // Construct the image source URLs
  var leftImgSrc = 'images/dice' + randomNumber1 + '.png';
  var rightImgSrc = 'images/dice' + randomNumber2 + '.png';

  // Update the left and right image elements
  leftImg.setAttribute('src', leftImgSrc);
  rightImg.setAttribute('src', rightImgSrc);

  // Get the h1 element
  var heading = document.querySelector('h1');

  // Check the values of randomNumber1 and randomNumber2 and update the text of the heading accordingly
  if (randomNumber1 > randomNumber2) {
    heading.textContent = 'Jogador 1 venceu!';
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = 'Jogador 2 venceu!';
  } else {
    heading.textContent = 'Empate!';
  }
});