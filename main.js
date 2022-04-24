// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

console.clear()

const label = document.createElement("label")
label.innerText = "Word Entry: "
document.body.appendChild(label)

const input = document.createElement("input")
document.body.appendChild(input)
let str = ""
let varTrim = ""

const button = document.createElement("button")
button.innerText = "Translator"
button.style.marginLeft = "5px"
button.style.backgroundColor = "darkgrey"
button.style.color = "white"
button.style.fontWeight = "bolder"
document.body.appendChild(button)

const clearButton = document.createElement("button")
clearButton.innerText = "Clear"
clearButton.style.marginLeft = "5px"
clearButton.style.backgroundColor = "darkgrey"
clearButton.style.color = "white"
clearButton.style.fontWeight = "bolder"
document.body.appendChild(clearButton)

const ol = document.createElement("ol")
// document.body.appendChild(ol)

input.addEventListener("keyup", (e) => {
  varTrim = e.target.value
  varTrim = varTrim.trim()
  str = varTrim.split(" ").map(word => pigLatin(word)).join(" ")
  // let wordArr = e.target.value.split(" ")
  // let translatedWordArr = wordArr.map(word => pigLatin(word))
  // let sentence = translatedWordArr.join(" ")
  // str = sentence
  // pigLatin(str)
  console.log(str)
})

button.addEventListener("click", () => {
  const li = document.createElement("li")
  if(input.value === "" || str === "ay") {
    li.innerText = "Please enter valid input"
    ol.appendChild(li)
    return document.body.appendChild(ol)
  }
  li.innerText = str
  ol.appendChild(li)
  document.body.appendChild(ol)
  input.value = ""
  str = "" 
})

clearButton.addEventListener("click", () => {
  ol.innerHTML = ""
})

const pigLatin = (word) => {
  word = word.toLowerCase().trim()
  let vowels = ["a", "e", "i", "o", "u"]
  if (vowels.includes(word[0])) {
    return word + "yay"
  } else { 
    let consonant = ""
    for (let i = 0; i < word.length ; i++) {
        if (vowels.includes(word[i])) {
          break;
        }
        consonant += word[i]
        // console.log(consonant)
      }
      // console.log(consonant.length)
      // console.log(word.substring(consonant.length))
      return word.substring(consonant.length) + consonant + "ay"
    }
  }
  
  // the first function called in the program to get an input from the user
  // to run the function use the command: node main.js
  // to close it ctrl + C
  // const getPrompt = () => {
    //   rl.question('word ', (answer) => {
      //     console.log( pigLatin(answer) );
      //     getPrompt();
      //   });
      // }
      
      // // Unit Tests
      // // to use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
