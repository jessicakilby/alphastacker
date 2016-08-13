// Create a stackLetters function that should console.log rows of letters. It should take an array containing the letters of the alphabet and output them like this:

// a
// ab
// abc
// abcd
// abcde
// abcde f
// etc
// Then add logic to stackLetters that places a space after every fifth letter

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];

var newAlpha = [];


function alphaStacker() {
	for (var i = 0; i < alphabet.length; i++) {
		newAlpha += alphabet[i];
		console.log(newAlpha.replace(/(.{5})/g, '$1 ').trim());
	}	
}

alphaStacker();



// if (newAlpha.length%5 === 0) {
// 	console.log(spacer);
// }