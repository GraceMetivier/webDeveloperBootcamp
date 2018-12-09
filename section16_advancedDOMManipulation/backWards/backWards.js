// function reverseIt(myString){
//   var reversedString = "";
//   for (var i = myString.length - 1; i >= 0; i --){
//     reversedString += myString[i];
//   }
//   return reversedString;
// }

// reverseIt("!sdrawkcab ma I pleH");



// var reverseVowels = function(s) {
//     var result = '';
//     var string = [];
//     var vowels = [];
    
//     for (var i=0; i< s.length; i++) {
//         var orig = s[i];
//         var char = s[i].toLowerCase();

//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowels.push(orig);
//             orig = null; // placeholder
//         }

//         string.push(orig);
//     }

//     for (var i=0; i<string.length; i++) {
//         if (!string[i]) {
//             string[i] = vowels.splice(vowels.length - 1, 1)[0];
//         }
//     }
    
//     result = string.join('');
    
//     return result;
// }



// var reverseVowels = function(s) {
//     var result = '';
    
//     var string = [];
//     var vowels = [];
    
//     // Start from front of string to find consonants and vowels.
//     for (var i=0; i<s.length; i++) {
//         var orig = s[i];
//         var char = s[i].toLowerCase();

//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowels.push(orig);
//             orig = null; // placeholder
//         }

//         string.push(orig);
//     }

//     // Insert vowels.
//     for (var i=0; i<string.length; i++) {
//         if (!string[i]) {
//             string[i] = vowels.splice(vowels.length - 1, 1)[0];
//         }
//     }
    
//     result = string.join('');
    
//     return result;
// }


var wordObj = {space:" ",
               punctuation:"!",
               letterBank:{pairedLetters:{one:"my",two:"ch",three:""},
                           singleLetters:{one:"t",two:"n",three:""},
                           vowels:['a','e','i','o','u']
                          },
               wordBank:{one:"way",two:"tonic"}
              }
//*****************************************
//DO NOT ALTER ANY CODE ABOVE THIS COMMENT
//*****************************************

function makeSentence(){
  var o = wordObj.letterBank.vowels[3];
  var n = wordObj.letterBank.singleLetters.two;
  var space = wordObj.space;
  var my = wordObj.letterBank.pairedLetters.one;
  var way = wordObj.wordBank.one;
  var t = wordObj.letterBank.singleLetters.one;
  var e = wordObj.letterBank.vowels[1];
  var ch = wordObj.letterBank.pairedLetters.two;
  var tonic = wordObj.wordBank.two;
  var exclamation = wordObj.punctuation;
  
    return (o.toUpperCase()+n+space+my+space+way+space+t+o+space+t.toUpperCase()+e+ch+tonic+exclamation);
}
