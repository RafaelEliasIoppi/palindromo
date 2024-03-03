document.getElementById('check-btn').addEventListener('click', function() {
    var inputValue = document.getElementById('text-input').value.toLowerCase().replace(/[^a-z]/g, '');
    var reversedValue = inputValue.split('').reverse().join('');

    if (inputValue === reversedValue) {
        document.getElementById('result').textContent = '"' + inputValue + '" is a palindrome.';
    } else {
        document.getElementById('result').textContent = '"' + inputValue + '" is not a palindrome.';
    }
});
