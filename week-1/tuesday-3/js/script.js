/*  This array of objects contains some weird data, and some useless points,
	You're tasked in transforming and normalizing this data to the second
	example */

	const data = [
		{
			name: "robert",
			age: "29",
			residence: "amsterdam",
			work: {
				title: "Lecturer",
				employer: "Hogeschool van Amsterdam"
			}
		},
		{
			name: "berend",
			age: "32",
			residence: "rotterdam",
			work: {
				title: "Front-end Developer",
				employer: "DEPT"
			}
		},
		{
			name: "ubaida",
			age: "26",
			residence: "Amersfoort",
			work: {
				title: "Project Manager",
				employer: "Clarify"
			}
		}
	];
	
	
	/* Filter by age, normalize capitals in names, convert ages to numbers, remove work.
		const data = [
			{
				name: "Robert",
				age: 29,
				residence: "Amsterdam",
			},
			{
				name: "Berend",
				age: 32,
				residence: "Rotterdam",
			}
		];
	*/
	// NAMES
	// function transformArrOfObj() {
	//    let names = data
	//    .map( item => item.name.charAt(0).toUpperCase() + item.name.substr(1).toLowerCase())
	//    console.log(names);
	  
	// //  CITIES
	//   let places = data.map (city => city.residence.charAt(0).toUpperCase() + city.residence.substr(1).toLowerCase())
	//    console.log(places)
	
	// //  AGES
	// let ages = data.map (number => number.age)
	// ages = ages.map(x => Number.parseInt(x, 10));
	//    console.log(ages)
	// }
	
	// transformArrOfObj();
	
	
	function getData() {
	  const data = [
		{
			name: "robert",
			age: "29",
			residence: "amsterdam",
			work: {
				title: "Lecturer",
				employer: "Hogeschool van Amsterdam"
			}
		},
		{
			name: "berend",
			age: "32",
			residence: "rotterdam",
			work: {
				title: "Front-end Developer",
				employer: "DEPT"
			}
		},
		{
			name: "ubaida",
			age: "26",
			residence: "Amersfoort",
			work: {
				title: "Project Manager",
				employer: "Clarify"
			}
		}
	];
			// Map maakt een nieuwe array. en die "returned" die naar de variabel die ervoor staat.
			let userData = data.map(element => {
				// Return hier dus een 'object' (zie ook de {}) met daarin een name en username property,
				// en die properites zijn dus van ieder element in de oorspronkelijke array de name en 
				// username
		  
			   
				return {
					name: element.name.charAt(0).toUpperCase() + element.name.substr(1).toLowerCase(),
	age: parseInt(element.age, 10),
					residence: element.residence.charAt(0).toUpperCase() + element.residence.substr(1).toLowerCase()
			
		  }
	
			})
	   let newUserData = userData.pop();
		console.log(userData);
		}
	
	getData();