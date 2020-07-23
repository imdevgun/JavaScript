// write a program to check if the word is a palindrome. A word that spells the same when written backwards is a palindrome

function palindrome(word){
    word = word.toLowerCase()
    newWord = ""
    for(let i = word.length - 1; i >= 0; i--){
        newWord += word[i]
    }
    if(newWord === word){
        return true
    }else{
        return false
    }
}

console.log(palindrome("raceCar"))