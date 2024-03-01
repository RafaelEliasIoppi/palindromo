document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const textInput = document.getElementById('text-input');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting and refreshing the page

      const inputText = textInput.value.trim();
      const isPalindrome = checkPalindrome(inputText);

      if (isPalindrome) {
          resultDiv.textContent = inputText + ' is a palindrome.';
      } else {
          resultDiv.textContent = inputText + ' is not a palindrome.';
      }
  });

  function checkPalindrome(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
  }
});
