document.getElementById('check-btn').addEventListener('click', function() {
    let inputValue = document.getElementById('text-input').value.trim().toLowerCase();

    if (inputValue === '') {
        alert("Please input a value.");
    } else {
        if (isPalindrome(inputValue)) {
            result.innerHTML = `${inputValue} is a palindrome.`;
        } else {
            result.innerHTML = `${inputValue} is not a palindrome.`;
        }
    }
});

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-z0-9]/g, '').toLowerCase();
    // Reverse the string
    let reversedStr = cleanedStr.split('').reverse().join('');
    // Check if the original string is equal to its reverse
    return cleanedStr === reversedStr;
}