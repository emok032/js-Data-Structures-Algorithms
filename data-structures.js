/* ============================================ARRAYS (Linear - Elements)============================================ */

// Linear Collection of Elements
// Positve: Constant access tag
// Negative: Single continuous block of memory

var exampleArray = ['Element-001', 'Element-002', ...];
// an ELEMENT = ARRAY[elementSize * offset];
exampleArray.push(); 	// Adds Element to Array
exampleArray.pop(); 	// Removes Element from Array
exampleArray.indexOf(); // Search Array for a Specified Match

Array.prototype.map();		
	// Takes callback function; Takes each element of original array as it's parameter(s)
	// All elements returned are place in new array from the function
Array.prototype.reduce();
	// Takes callback function but returns single value;
	// Parameters: Accumulator object + each element in the original array


/* Example #1: Arrays - Find the actor(s) matching a specified genre */

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

/* ============================================LINKED LISTS (Linear - Nodes)============================================ */

/* Linear Collection of Nodes
Node: 	Data attribute - stored information about list
		Next attribute - points to NEXT Node in List (*until LAST Node: NEXT = null)
Traversal: Must traverse ENTIRE list to locate particular Node

Positives:
	Memory Usage- One Node at a time (initially low cost to memory)
	Memory Location- Not significant
	Updating elements within list is fast- Just add new Node!
Negative:
	JS introduced new arrays called [Typed Arrays]
Common Operations:
	Add, Delete, Clear, and Has
*/

var actors = new LinkedList();
// Add: Inserts new node/data attribute to the left of each original node/data attribute
	var willSmith = actors.add('Will'); // or
	actors.add('Kate'); // or
	actors.add('Kate', willSmith);

// Delete
	actors.delete(); // Removes last node in linked list
	actors.delete(willSmith); // Removes referenced node

// Clear: Removes all nodes in linked list
	actors.clear();

// Has: (like indexOf) Returns True/False
	var actors = new LinkedList();
	actors.has('Brad'); // False
	actors.add('Brad'); // Add 'Brad' to array Actors
	actors.has('Brad'); // True

// Iterating (over a linked list)
	var moreActors = new LinkedList();
	// Reference first node of the list - (.head)
	// Move to next node on the list - (.next)
	for (var node = list.head; node !== null; node = node.next);

// CLASS Linked List
// First need, Node class - with both attributes (data and next)
	function Node(data) {
		this.data = data;
		this.next = null;
	}

// Linked List Class itself
	function LinkedList() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

// Data Object
	LinkedList.prototype.add = function(data){
		var node = new Node(data);

		if (this.head === null)
			this.head = node;
			this.tail = node;
	}

	this.tail.next = node;
	this.tail = node;
	this.length += 1;

	return node;
};

// Delete Method
	LinkedList.prototype.delete = function(node){
		if (this.length === 1) {
			return false;
		}

		if (node instanceof Node) {
			for (var _node = this.head; _node !== null; _node = _node.next) {
				if (_node.next === node) {
					_node.next = node.next;
					this.length -= 1;
					return true;
				}
			}

		} else {
			for (var _node = this.head; _node !== null; _node = _node.next) {
				if (_node.next === this.tail) {
					_node.next = null;
					this.tail = _node;
					this.length -= 1;
					return true;
				}
			}
		}

		return false;
	};

// Clear method
LinkedList.prototype.clear = function() {
	this.length = 0;
	this.head = null;
	this.tail = null;
};

// Delete method
LinkedList.prototype.has = function(node) {
	for (var _node = list.head; _node !==null;  _node = _node.next) {
		If (_node === node) {
			return true;
		}
	}

	return false;
}

/* Example #2: Linked Lists - Cross-reference target article author with original author array */

article = {
	id: 23465,
	title: 'Some people almost did something',
	author: 'Rodrigo Silveira',
	publish_date: '2015-01-01T10:11:12',
	body: '...'
};

articleArray = getArticles(); // Create new array from original array
articleList = getListFromArray(articleArray); // Convert new array into linked list

function insertArticle(article) {
	var head = articleList.head;
	var node = head;

	for (var _node = head; _node !== null; _node = _node.next) {
		if (_node.data.author === article.author) {
			node = _node;
			break;
		}
	}

	articleList.add(article, node);
}


/* ============================================SETS============================================ */

Set: 

Supported Operations:

ES6 Set: Object

/* Example #3: Sets */
















































































