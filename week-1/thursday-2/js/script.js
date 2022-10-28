

/* This assignment builds on the earlier assignment we did today. Create a table
   containing the above dataset, this time though, the dataset is a bit scuffed.
   We need to normalize the data by addressing the following issues:
   1) The id is not always a number, convert it to an integer / number first.
   2) The name isn't normalized, random capitals appear. Change this string in a
   first letter capital and lowercase after that
   3) "kaas" is not always a boolean. Convert it to a string so we can print it in HTML
   4) "coords" is an object. If you try and print this, you'll get [object Object] or something.
   We'll have to loop over the object and print a custom string using template literals.
*/


// function getData() {


// getData();



function generateTable() {
 
	let userData;
	
	  let table = document.querySelector('table'); // Grab the entire table
	  let theading = document.querySelector('thead tr'); // Grab the row in the thead
	  let tbody = document.querySelector('tbody') // Grab the body
	  
	const data = [
	  {
		  id: 1,
		  name: 'ROBERT',
		  kaas: false,
		  coords: {
			  lat: "52.3676",
			  long: "4.9041"
		  }
	  },
	  {
		  id: "2",
		  name: 'viNcent',
		  kaas: "true",
		  coords: {
			  lat: "52.3676",
			  long: "4.9041"
		  }
	  },
	  {
		  id: 3,
		  name: 'laura',
		  kaas: true,
		  coords: {
			  lat: "52.3676",
			  long: "4.9041"
		  }
	  },
  ]
	
		   userData = data.map(element => {
		 
			  return {
		  id: parseInt(element.id, 10),
				  name: element.name.charAt(0).toUpperCase() + element.name.substr(1).toLowerCase(),
		  kaas: element.kaas.toString(),
		  latitude: element.coords.lat,
		  longtitude: element.coords.long
  
		}
  
		  })
	
	  Object.keys(userData[0]).forEach(key => {
  
		  let newElement = document.createElement('th');
		  newElement.textContent = key;
		  theading.appendChild(newElement);
	  })
  
  
  
	  userData.forEach(obj => {
  
  
		  let tr = document.createElement('tr');
		  tbody.appendChild(tr);
  
  
		  for (const [key, value] of Object.entries(obj)) {
  
  
			  let td = document.createElement('td');
			  td.textContent = value; // Use the value, not the property / key!
			  tr.appendChild(td) // And append it to the row we just made.
  
		  }
  
	  })
  
	 }
  
  generateTable();
  
  
  
  
  // MAP SHIT THAT DID NOT WORK
  
  // coords: element.coords.map(coordsEl => {
	
  //   return {
  //     lat : coordsEl.coords.lat,
  //     long: coordsEl.coords.long
  //   }
		  
  //       })
		  