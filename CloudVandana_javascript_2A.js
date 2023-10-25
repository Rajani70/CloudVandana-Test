function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Reverse each word in the array
    let reversedWords = words.map(word => {
        // Check if the word ends with punctuation (.,; etc.)
        let punctuation = '';
        if (/[\W]$/.test(word)) {
            punctuation = word.slice(-1);
            word = word.slice(0, -1);
        }

        // Reverse the word and append the punctuation back
        return punctuation + word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage
let inputSentence = "This is a sunny day";
let result = reverseWords(inputSentence);
console.log(result);