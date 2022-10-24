const data = [
	"robert",
	"vincent",
	"lAuRa",
	"Cas",
	"wIMER",
	"rOOs"
];





function convertArrayStringsToCapitalized() {

  let neatNames = data
  .map( a => a.toLowerCase())
  .map( a => a.charAt(0).toUpperCase() + a.substr(1) );

console.log(neatNames);
}

convertArrayStringsToCapitalized();