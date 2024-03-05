// .49 groupAnagrams
var groupAnagrams = function (strs) {
    let anagrams = {}
    for (let word of strs) {
        const sortedWord = word.split('').sort().join('');
        if (!anagrams[sortedWord]) {
            anagrams[sortedWord] = [];
        }
        anagrams[sortedWord].push(word);
    }
    return Object.values(anagrams)
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs))