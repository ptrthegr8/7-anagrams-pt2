function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
};
//
function showAnagrams(anagrams) {
    
    let containerDiv = document.createElement("div");
    let t = document.createTextNode(anagrams);
    containerDiv.appendChild(t)
    document.getElementById("container").appendChild(containerDiv);
};
//
function getAnagram() {
    const anagrams = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let alphaWord = alphabetize(word);
        if (alphaWord in anagrams) {
            anagrams[alphaWord].push(word);
        } else {
            anagrams[alphaWord] = [word];
        }
    }
    return anagrams;
};
//
const foundAnagrams = getAnagram();
for (let key in foundAnagrams) {
    if (foundAnagrams[key].length >= 5) {
        showAnagrams(foundAnagrams[key])
    }
};