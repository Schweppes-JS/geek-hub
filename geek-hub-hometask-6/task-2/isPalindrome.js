function isPalindrome(string) {
  let newString = string.replace(/\s/g, "").toLowerCase();
  if (newString.length % 2 === 0) {
    const firstHalf = newString.slice(0, (newString.length / 2));
    const secondHalf = newString.slice(newString.length / 2, newString.length);
    const reverseSecondHalf = [...secondHalf].reverse().join("");
    if (firstHalf === reverseSecondHalf) return true;
    else return false;
  }
  else {
    const firstHalf = newString.slice(0, (newString.length / 2 + 1));
    const secondHalf = newString.slice(newString.length / 2, newString.length);
    const reverseSecondHalf = [...secondHalf].reverse().join("");
    if (firstHalf === reverseSecondHalf) return true;
    else return false;
  }
}

console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true
