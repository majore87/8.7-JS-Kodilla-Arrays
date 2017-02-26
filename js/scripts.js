var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var sorted = [];
for (var i = 0; i < allNames.length; i++) {
    sorted.push(allNames[i].toLowerCase());
}
sorted.sort();

function addName (newName) {
	if (sorted.indexOf(newName) === -1) {
		sorted.push(newName);
		console.log(sorted);
		alert("Name was added");
	}
	else {
		alert("Name already exists");
	}
}

function newName() {
	var newName = prompt("Prompt new name");
	return newName.toLowerCase();
}

var userPrompt = newName();
addName(userPrompt);
