/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let characters = new Set();

    for (let right = 0; right < s.length; right++) {

        while (characters.has(s[right])) {
            characters.delete(s[left]);
            left++;
        }

        characters.add(s[right]);

        let currentLength = right - left + 1;

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};