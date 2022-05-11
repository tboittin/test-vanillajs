isPalindrome = require('./index.js')

test('neuquen is a palindrome', () => {
    expect(isPalindrome('neuquen')).toBe(true)
})

test('bariloche is not a palindrome', () => {
    expect(isPalindrome('bariloche')).toBe(false)
})