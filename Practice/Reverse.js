// write a program to reverse the word

function reverse(word){
    newWord = ""
    for(let i = word.length - 1; i >= 0; i--){
        newWord += word[i]
    }
    return newWord
}

console.log(reverse("sahil"))