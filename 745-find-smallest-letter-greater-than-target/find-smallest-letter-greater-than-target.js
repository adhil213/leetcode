/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {

    let full = [...letters, target].sort();
    let answer = letters[0];

    for (let j = 0; j < full.length; j++) {

        if (full[j] > target) {
            answer = full[j];
            break;
        }
    }

    return answer;
};