//Vowel Count
// Write a program that returns the total numbers of vowels in a word

function vowelCount(word){
    count = 0
    word = word.toLowerCase()
    for(letter of word){
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++
        }
    }
    return count
}
word = "Temple"
console.log(vowelCount(word))

