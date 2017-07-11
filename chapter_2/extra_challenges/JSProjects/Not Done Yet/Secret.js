/*
	Secret Messages
	---------------------------------------
	Ever thought it would be cool to be able to talk to your
	friends with a secret language that only you and your
	friends know? Well, we can work a simple implementation
	to encode our messages and do just that! For simplicity,
	we will work with only lowercase messages.

	You are provided two getter functions that retrieve your
	encoding letters (getKey()) and the lower case letters
	of the alphabet (getLetters()).

	In order to implement this, we require two functions:

		1. encode(message)
			- Provided a message, the function gets the letters
			  of the alphabet from the getLetters() function
			  along with the encoding string from the getKey()
			  function and swaps the lowercase letter from the 
			  message with the corresponding letter from the 
			  key.
		2. decode(message)
			- Provided an encoded message, thsi function will
			  use the same key to decode the message by swapping
			  the encoded letters in the message with the correct
			  letters from the alphabet.

	NOTE: It may be useful to use the String.indexOf(char) 
	method.
*/

//	Write your code here between the lines:
//	--------------------------------------- 

//  ---------------------------------------

// 	Provided Code:
// 	---------------------------------------

// Key to encrypt message with.
function getKey() {
	return "!@#$%^&*()_-+=[]{}>.<,~`109";
}

// Lowercase letters.
function getLetters() {
	return "abcdefghijklmnopqrstuvwxyz ";
}