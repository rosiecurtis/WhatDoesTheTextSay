console.log('hello again.. ');

//index.js
import "mustard-ui";
import DOMPurify from 'dompurify';



//import count from './modules/count';
import * as countChars from './modules/countChars.js';        //counts characters in the string
import * as countVowels from './modules/countVowels.js';        //counts vowels in the string



//event handler for analyse button 
document.getElementById("btnAnalyse").addEventListener("click", analyseText);




function analyseText() {

    const dirty = document.getElementById("userText").value;
    const clean = DOMPurify.sanitize(dirty);

    if (clean.length > 0) {

        //get the dropdown choice
        console.log("dropdown is " + DOMPurify.sanitize((document.getElementById("myList").value)));
        const key = DOMPurify.sanitize((document.getElementById("myList").value));


        //make a call to the approporiate module 
        switch (key) {
            case "countChars":
                showResult(countChars.render(clean));
                break;

            case "countVowels":
                showResult(countVowels.render(clean));
                break;

            default:
                break;
        }

 

    } else {
        alert('Enter some text');
    }

}



 



//displays the output of the anlyse function into 'result' div
function showResult(dirty) {
    let clean = DOMPurify.sanitize(dirty);
    document.getElementById("result").innerHTML = clean;
} 
