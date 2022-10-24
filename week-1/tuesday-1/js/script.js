console.log('tuesday 1')

const data = [
	1,
	2,
	"3",
	"4",
	5
]

function convertArrayStringsToNumbers() {
  
  let onlyNumbers = data.map( item => {
    return parseInt(item, 10);
  })
  console.log(onlyNumbers);
}

convertArrayStringsToNumbers();