
var userInput = prompt("Please enter your your text to convert to mose code");

var userInputArray = userInput.toUpperCase().split("");

var answer =  " ";

var dictionary = {
"A" : ".-",
"B" : "-...",
"C" : "-.-.",
"D" : "-..",
"E" : ".",
"F" : "..-.",
"G" : "--.",
"H" : "....",
"I" : "..",
"J" : ".---",
"K" : "-.-",
"L" : ".-..",
"M" : "--",
"N" : "-.",
"O" : "---",
"P" : ".--.",
"Q" : "--.-",
"R" : ".-.",
"S" : "...",
"T" : "-",
"U" : "..-",
"V" : "...-",
"W" : ".--",
"X" : "-..-",
"Y" : "-.--",
"Z" : "--..",
"0" : "-----",
"1" : ".----",
"2" : "..---",
"3" : "...--",
"4" : "....-",
"5" : ".....",
"6" : "-....",
"7" : "--...",
"8" : "---..",
"9" : "----."
}

for(var x = 0; x < userInputArray.length; x++ ){
	var myNew = userInputArray[x];
 	answer += dictionary[myNew];
}

document.getElementById("result").innerHTML = answer;








