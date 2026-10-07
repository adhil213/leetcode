/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const required = new Array(26).fill(0);

    
    for (const char of licensePlate.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            const index = char.charCodeAt(0) - 97;
            required[index]++;
        }
    }

    let answer = null;

    
    for (const word of words) {
        const count = new Array(26).fill(0);

        for (const char of word.toLowerCase()) {
            const index = char.charCodeAt(0) - 97;
            count[index]++;
        }

        let completes = true;

        for (let i = 0; i < 26; i++) {
            if (count[i] < required[i]) {
                completes = false;
                break;
            }
        }

        if (completes) {
            if (answer === null || word.length < answer.length) {
                answer = word;
            }
        }
    }

    return answer;
};