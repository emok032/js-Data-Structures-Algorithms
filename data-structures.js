/* ============================================ARRAYS: Basic============================================ */

var exampleArray = ['Element-001', 'Element-002', ...];

exampleArray.push(); 	// Adds Element to Array
exampleArray.pop(); 	// Removes Element from Array
exampleArray.indexOf(); // Search Array for a Specified Match

Array.prototype.map();		
	// Takes callback function; Takes each element of original array as it's parameter(s)
	// All elements returned are place in new array from the function
Array.prototype.reduce();
	// Takes callback function but returns single value;
	// Parameters: Accumulator object + each element in the original array


/* Example #1: Find the actor(s) matching a specified genre */

	var actors = [	{name: 'Eric', genre: ['Sci-Fi']},
					{name: 'Angelina', genre: ['Action']},
					{name: 'Brad', genre: ['Thriller']}
			      ];
	/* Version-A:
	 		Create NEW array
	 		Iterate over array of actors
	 		Scan for matching actors
	 		Add matches to name of actors */
	var actionStars = [];
	for (var i = 0; i < actors.length; i++) {
		if (actors[i].genre.indexOf('Action') >= 0) {
			actionStars.push(actors[i].name)
		}
	}

	/* 	Version-B Array.filter()
			ONLY creates NEW array if the actor contains specified genre of 'Action'
			Map over new array
			Only return names of actors in this new array */
	actionStars = actors.filter(function(oneActor){
		return oneActor.genre.indexOf('Action') >= 0;
	}).map(function(actionStars){
		return actionStar.name;
	});





	
