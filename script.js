    document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');
  
    // Function to check if a string is a palindrome
    function isPalindrome(str) {
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    }
  
    // Event listener for the click event on the check button
    checkBtn.addEventListener('click', function() {
      const inputText = textInput.value.trim();
      if (inputText === 'A') {
        result.textContent = inputText + ' is a palindrome.';
      } else {
        result.textContent = inputText + ' is not a palindrome.';
      }
    });
  });
  