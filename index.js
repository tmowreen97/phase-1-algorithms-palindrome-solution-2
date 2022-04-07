function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the begining to the middle
  for (let i = 0; i < word.length/2; i++){
      //   check each letter to the corresponding letter from the end.
      const j = word.length -1 -i
      //now we need to actually assign the element of the word to a variable
      const startChar = word[i]
      const endChar = word[j]
       //if any of these do not match, we can return false.
      if (startChar !== endChar) return false;
  }
  // if they all match, we return true. 
  return true;   
}

/* 
  Add your pseudocode here
  if the word is a palindrome, which means it is the same forwards and backwards.
  so if the first letter and the last letter are the same, and the second letter and the second to last letter is the same, etc. until we get to the middle is true, then it is a palindrome.
  //racecar 7/2 == 3.5
  //mmmmmm 6/2 == 3

  r a c e c a r
  0 1 2 3 4 5 6 
  i           j

  r a c e c a r
  0 1 2 3 4 5 6 
    i       j

  r a c e c a r
  0 1 2 3 4 5 6 
      i   j
  
  r a c e c a r
  0 1 2 3 4 5 6 
        ij


  iterate from the begining to the middle
    check each letter to the corresponding letter from the end.
      if any of these do not match, we can return false.
  if they all match, we return true. 

*/

/*
  Add written explanation of your solution here
  Here we check the first letter and the last letter to see if they match.
  then we check the second letter and the second to last letter to see if they match.
  and we keep going till we meet the middle. 
  if they all match, its a palindrome!
  if they don't its not a palindrome!

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
