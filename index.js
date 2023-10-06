// Iteration 1: Names and Input
let hacker1 = "Clyde";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Bonnie";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let driversName = hacker1[0];
let navigatorsName = "";

for (let i = 1; i < hacker1.length; i++){
    driversName += " " + hacker1[i].toUpperCase();
}
console.log(driversName);

for (let i = hacker2.length - 1; i >= 0; i--){
    navigatorsName += hacker2[i];
}

console.log(navigatorsName);

/*
referenceString.localeCompare(compareString)
returns a positive number, a negative number or 0
result > 0 referenceString comes after
result < 0 referenceString comes before
result = 0 referenceString and compareString are the same
*/

if (hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first, definitely.");
}
else{
    console.log("What?! You both have the same name?")
}

// Bonus 1
/*
String.prototype.split()
The split() method of String values takes a pattern and divides this string into
an ordered list of substrings by searching for the pattern,
puts these substrings into an array, and returns the array.

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

const = singleWord = str.split(" word")
console.log(singleWord.length - 1)
// Expected output: # of times this word appears in string
// The length will be one index longer than the number of times the word appears
// because there is an index following the last occurence of the word,
// which counts towards the total length

*/

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a odio leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut a nisi dolor. Morbi ac augue sit amet libero molestie volutpat. Maecenas finibus, urna vel aliquet vehicula, neque lacus rutrum lectus, sodales posuere felis nibh et purus. Ut ullamcorper nunc nec massa auctor vulputate. Aenean lacinia dui velit, sed suscipit quam iaculis at. Duis quis justo massa.

Fusce quis felis congue, pharetra nunc eu, pretium ex. Aliquam auctor tempor neque, vel ultrices nisi semper id. Ut metus mi, auctor id rutrum nec, pellentesque non neque. Vivamus bibendum dictum rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt elit id felis ullamcorper ultricies. Curabitur rhoncus augue lorem, vitae tincidunt turpis mattis a. Aliquam augue eros, tempus a mattis sit amet, feugiat at neque. Integer finibus odio non diam facilisis, at suscipit nibh imperdiet. Aliquam ultrices arcu eu lorem ultrices hendrerit. Phasellus volutpat dolor sit amet purus volutpat finibus. Etiam placerat, turpis euismod gravida luctus, felis velit accumsan tellus, eu tincidunt nisi elit eu lorem. Quisque fermentum iaculis leo at rhoncus. Fusce mollis, nunc in bibendum pharetra, dui felis mattis ipsum, a finibus sapien dolor a ante.

Mauris non mattis eros. Donec vitae mi bibendum, volutpat sapien quis, eleifend velit. Quisque nec enim aliquet, lobortis ex non, suscipit ante. In luctus eget ipsum eget convallis. Curabitur nisi odio, lacinia eu tempus non, maximus ut risus. Morbi ac pulvinar sapien, quis gravida ligula. In vehicula lacus eget dignissim posuere. Mauris efficitur nisl nulla, nec commodo felis congue id.`;

let wordCount;
let etCount;

wordCount = longText.split(" ");
console.log(wordCount.length);

etCount = longText.split(" et");
console.log(etCount.length - 1);


// Bonus 2

let phraseToCheck ="A man, a plan, a canal, Panama!";
let remove = /[^A-Za-z0-9]/g;
/*
[^A-Z] matches anything that is not enclosed between A and Z

[^a-z] matches anything that is not enclosed between a and z

[^0-9] matches anything that is not enclosed between 0 and 9

[^_] matches anything that does not enclose _
*/
console.log(phraseToCheck);
console.log(phraseToCheck.length);

phraseToCheck = phraseToCheck.toLowerCase().replace(remove, "") //remove all non-letters, non-numbers and spaces
let phraseLength = phraseToCheck.length;

for (let i = 0; i < phraseLength / 2; i++){ // due to the comparison in the if conditional, we only need to cycle through half the length of the string
    if (phraseToCheck[i] !== phraseToCheck[phraseLength - 1 - i]) { //this compares the current letter to the letter on the other side of the string in the exact same position from the end
        console.log("Not a Palindrome.")
    }
    else {
        console.log("It's a Palindrome!")
    }
}