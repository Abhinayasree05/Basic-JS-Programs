const countVowels = function(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
};

// Example usage
let text = "Hello World";
console.log("Vowel count =", countVowels(text));