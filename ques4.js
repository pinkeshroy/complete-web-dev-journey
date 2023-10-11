// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// function groupAnagrams(strs) - this will return array of grouped anagrams
function getFrequency(str) {
  const freq = {};
  for (let i = 0; i < str.length; i += 1) {
    freq[str[i]] = (freq[str[i]] ?? 0) + 1;
  }
  return freq;
}
function compareObjects(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  for (const key in obj2) {
    if (obj1[key] !== obj2[key]) {return false;}
  }
  return true;
}

function groupAnagrams(strs) {
  const frequencies = [];
  const ans = [];
  for (let i = 0; i < strs.length; i += 1) {
    frequencies.push(getFrequency(strs[i]));
  }
  for (let i = 0; i < frequencies.length; i += 1) {
    if (frequencies[i] !== false) {
      const temp = [strs[i]];
      for (let j = i + 1; j < frequencies.length; j += 1) {
        if (compareObjects(frequencies[i], frequencies[j])) {
          temp.push(strs[j]);
          frequencies[j] = false;
        }
      }
      ans.push(temp);
    }
  }
  return ans;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
