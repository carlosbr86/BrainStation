/*
	Hangman
	---------------------------------------
	Let's make Hangman! Some code is already provided for printing
	a simple man as you guess wrong. Using the printHangman(count)
	function, add the code the print the man as someone gets
	wrong answers as well as the logic for the game.

	THIS ONE MUST BE DONE USING JSFIDDLE SINCE PROMPT IS USED.

	It would be helpful to write a command that allows you to stop 
	the game incase someone wants to quit.

	Your game wont be perfect but do your best!

	HINT: What type of conditional would be best for implementing
	the printHangman function? 
*/
//hangman

//1   _______
//2  |/      |
//3  |      
//4  |      
//5  |      
//6  |      
//7  |
//8__|___


//0    _______
//1   |/      |
//2   |      (_)				3	
//3   |      \|/				2
//4   |       |				    1
//5   |      / \				0
//6   |
//7___|___



function printHangman(count) {
//		var hangMan=["    _______\n","   |/      |\n","   |      \n","   |      \n","   |      \n","   |      \n",
//					"   |      \n","__|___\n"];  // USE FUNCTION AFTER.
	// var man = "";
	// var head = " ( ) \n";
	// var arms = " \\|/\n";
	// var belly = "  |\n";
	// var legs = " / \\";
	// man = man + head + arms+ belly + legs;
	alert(man);
}

var game = true;

while (game) {
//	var hangMan=[""," ( ) \n"," \\|/\n","  |\n"," / \\\n"];

    if (start == undefined) {
        var count = 0;
		var errorCount=0;
        var win = 0;
		var string2 = '';
        var word = prompt("Pick a word!");
		var string1='';   												//I am using this?????
		
			var numberOfRightGuess=0
        var gameWin = word.length;
		var hangMan=["    _______\n","   |/      |\n","   |      \n","   |      \n","   |      \n","   |      \n",
					"   |      \n","__|___\n"];
		var hangedMan=["    _______\n","   |/      |\n","   |      (_)\n","   |      \\|/\n","   |       |\n",
					"   |      / \\\n","   |      \n","__|___\n"]; 	  
		for (let i=0;i<gameWin;i++){
			string1 = string1 +'___ '     //_A_ _N_ _A_ (position1 5 9 ) PA:1 +4x
		} 
    }

	// ############################################# GAME INITIALIZED #############################################


	var guess = '';
	count++;
	string2='';
	var	rightGuess=0;
	for(let i=0;i<errorCount;i++){ // Substituing with Hanged Man
		hangMan[5-i]=hangedMan[5-i];
	}
	
	for(let i=0;i<=7;i++){
		string2= string2 + hangMan[i];
	}
	string2 = string2 + '\n'
                   
	string2 = string2+ string1 +"\nRight Guess: "+ numberOfRightGuess+"\n\n############# \n# Pick a letter! #\n############# ";
	var guess = prompt(string2);

	//Had you chosen a right letter?
	for(var position=0;position<gameWin;position++){
		if(guess==word.charAt(position)){         //Starting with words without repeated letters.
			win=win++;
			rightGuess++;
			numberOfRightGuess++;	   // 	I have to add a list of guessed right letters, to avoid repetion.
//			string1.replaceAt(1+(2*position,guess);											
		}
	}

//Treating the right Guess and Wrong Guess
	if(rightGuess==1){
		alert('Round'+ count +'! Right Answer!');
	}else{
		errorCount++;
		alert('Round'+ count +'! Wrong Answer!');
	}


	// Analysing if the game should continue
	var start = true;
	// for (let i=0;i<gameWin;i++){ 							Print the quantity of letters
	// 	string1=string1 + '_ ';
	// }
	if(numberOfRightGuess===gameWin){
		alert('\n#############\n# YOU WIN! #\n#############')
		game=false;
	}
	if(errorCount===4){          			//Improve this number 5... For now, avoiding loops.
		for(let i=0;i<=7;i++){
			string2='';
			string2= string2 + hangMan[i];
		}                     
		string2 = string2 + '\n#############\n# YOU LOSE! #\n#############';
		alert(string2);
		var game = false;
	}
	
}