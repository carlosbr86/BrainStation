// In this challenge, you are going to write a virus 
// that reads files and change the words that start 
//with "b" to "BrainStation". You will write a Node JavaScript
// file that reads files, modify the content of the file, 
//and write the modified content to another file. 
//You will need to understand the asynchronous nature of 
//this operation in order to successfully finish the challenge. 
//All this work should be in the Terminal: there will be no
// use of browsers while we learn these concepts.

//Write a JavaScript file that reads the file you've 
//    downloaded.
// Manipulate the file content as the following:
//  * find all words that start with "b" (for both 
//         uppercase and lowercase)
//  * change all of them to "BrainStation"
//   * Create a new file with the manipulated content.

//Diving Deeper

//3 1*  -  3 blank Spaces and 1 star
//2 3*
//7*
//2 3*
//3 1*


const fs = require("fs");
fs.readFile('./quote.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log('\n\nBefore Virus:      '+data+'\n\n');
    let newString='';
    //data = data.replace(/B/gi, "BrainStation");   //Works Too!
    for (var i=0;i<data.length;i++){
        if(data.charAt(i)==='B'||data.charAt(i)==='b'){
            newString = newString + 'BrainStation';
        }else{
            newString = newString + data.charAt(i);
        }
    }

    console.log("After Virus:       "+newString+'\n\n');
    fs.writeFile("afterVirus.txt", newString, 'utf8', (err) => {
        if (err) throw err;
        console.log('Virus attack!');

    });
});