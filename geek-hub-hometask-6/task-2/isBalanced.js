function isBalanced(string) {
    const regex1 = /[{}]/g;
    const regex2 = /}{/;
    filteredString = string.match(regex1).join().replace(/,/g, '');
    if (regex2.test(filteredString)) return false;
    if (filteredString[0] === '}') return false;
    let counterLeftBrace = 0;
    let counterRightBrace = 0;
    for (let i = 0; i < filteredString.length; i++) {
        if (filteredString[i] === '{') counterLeftBrace++;
        else counterRightBrace++;
    }
    if (counterLeftBrace === counterRightBrace) return true;
    else return false;
}

console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // false
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false