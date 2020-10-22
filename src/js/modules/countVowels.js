
 
function countVowels(userText) {
    return userText.match(/[aeiou]/gi).length;
  }
  
  
  function render(userText) {
    let count = countVowels(userText);
    let output = "There are " + count + " vowels in the text";
    return output;
  }
  
  
  export { render };
  
  