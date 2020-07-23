//Vowel Count
// Write a program that returns the total numbers of vowels in a word

function vowelCount(word){
    // a count variable to count the number of vowels
    count = 0
    // convert all letters to lowercase for case-sensitive inputs
    word = word.toLowerCase()
    // loop through the word checking for vowels at every character. REMEMBER a string is nothing but an ARRAY of characters
    for(letter of word){
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++
        }
    }
    return count
}
word = "Temple"
console.log(vowelCount(word))

