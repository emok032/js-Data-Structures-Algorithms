/* ============================================ARRAYS (Linear - Elements)============================================ */

// [Native to JS] Linear Collection of Elements
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

/* [Not native to JS] Linear Collection of Nodes
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

// [Native to JS] 
// Set: 
// ES6 Set: Object

/* Example #3: Sets */
// To ensure duplicate tags are not added
function saveArticle(articleId, tags){
	var uniqueTags = new Set();

	tags.forEach(function tag){
		uniqueTags.add(tag);
	});
	
	uniqueTags.forEach(function(tag){
		var tagId = saveTag(tag);
		addTagToArticle(articleId, tagId);
	});
}

/* ============================================Linear Structures============================================ */

// Queues & Stacks: Linear Data Structures


/* 	QUEUES (FIFO)-------------------------------------------------

	Queue: Lists that preserve the insertion order of an element
		WHERE *ELEMENT #FIRST(ADDED) is #FIRST(REMOVED)*

		"Task Queue" - Queue order = Execution order
		Common Operations
		Enqueue - Adds elements to queue (added to end or back of queue)
		Dequeue - (Like array.pop) removes from front of queue
		Length  - How many items in queue */

function Queue(optElements){
	if (optElements instanceof Array) {
		this.items = optElements;
	} else {
		this.items = [];
	}

	this.length = this.items.length;
}

Queue.prototype.enqueue = function(item) {
	this.length += 1;
	return this.items.push(item);
}

Queue.prototype.dequeue = function(){
	if (this.length > 0) {
		this.length -= 1;
	}

	return this.items.shift();
};

// Example #4 - Queue in RESTful API
app.get('/insert-task/:data', function(req, res, next) {
	var data = {
		timestamp: Data.now(),
		payload: req.params.data
	};
	
	tasks.enqueue(data);
	next();
});

app.get('/process-task', function(req, res, next){
	var task = tasks.dequeue();
	service.save(task.payload);
	next();
});


/* 	STACKS (LIFO) - Recency --------------------------------------
	
	Stacks: Lists that preserve the insertion order of an element
			WHERE *ELEMENT #LAST(ADDED) is #FIRST(REMOVED)*     */

// Example #5 - Actions Tracker
// Track Actions so that it can be reversed if desired
// By Pushing the Actions to a Stack!
var actions = new Stack();

function doAction(action){
	actions.push(action);
}

function undoLastAction(){
	var action = actions.pop();
	action.undo();
}

// Common Operations
// Push - Adds to top of Stack
// Pop - Removes from top of Stack
// Top - Returns reference to current top-item of stack

// @constructor of Stack class
// Does NOT take any parameters
// Wraps empty array and tracks it's length
function Stack(){
	this.items = [];
	this.length = this.items.length;
}
// @params
Stack.prototype.push = function(item){
	this.length += 1;
	return this.items.push(item);
};

// @return
Stack.protoype.pop = function() {
	if (this.length > 0) {
		this.length -= 1;
	}

	return this.items.pop();
};

// @return
Stack.prototype.top = function(){
	if(this.length > 0) {
		return this.items[this.length - 1];
	}

	return undefined;
};






/* ============================================Binary Trees============================================ */

/*
"Tree": Data Structure and Type of Graph
		- Composed of a set of (vertices) Nodes
		- Connected by Edges
		- Contains a Root Node
		- i.e. HTML (tags)
"Binary Tree": Tree with it's own rules
		- Directed Tree/Graph
		- 1 Node has 2 children (maximum)
		- Value of Left child < than parent
		- Value of Right child > than parent
*/

// Common Operations
// 		Add: 		Inserts new Node relative to parent
// 		Remove: 	Removes Node relative to parent along with its sub trees
// 		Balance: 	Sorts tree for optimal searching
// 		Find: 		Searches tree for given property

function Node(data, left, right){
	this.data = data;
	this.left = left || null;
	this.right = right || null;
};

// For convenience, track length of tree
function BTree(){
	this.root = null;
	this.length = 0;
};

// Add Node: *Keep looking down the tree until we encounter leaf Node to add a new Node
BTree.prototype.add = function(data) {
	var node = new Node(data);
	this.length += 1;

	if (this.root === null) {
		return this.root = node;
	}

	var currentNode = this.root;
	var parentNode = null;

	while (currentNode) {
		parentNode = currentNode;

		if (data.id < currentNode.data.id) {
			currentNode = currentNode.left;

			if(currentNode === null) {
				return parentNode.left = node;
			}
		} else {
			currentNode = currentNode.right;

			if (currentNode === null) {
				return parentNode.right = node;
			}
		}
	}
};

// Balance (example)
var articlesArray = getArticles();
var articlesTree = new Btree();

articlesArray.forEach(function(article){
	articlesTree.add(article);
});

app.get('/article/:articleId', function(req, res){
	var articleId = req.params.articleId;
	var article = articlesTree.find(articleId);
	res.json(article);
});





/* ============================================Graphs============================================ */
		
/* GRAPHS (cyclic)
		- Composed of a set of (vertices) Nodes
		- Connected by Edges and Loops 
		- Edges that go to and from Node in either direction
				- **Order is irrelevant (b/c of edges!) */
// AddNode: Adds Single Node to Graph (*Node is not actualy connected to anything in graph at this point)
// AddEdge: Connects two Nodes

var Node = function(data){
	this.data = data;
	this.neighbors = [];
};

var Graph = function(){
	this.nodes = []
	this.length = 0;
};

// addNode: Provide interface to use to add Nodes to Graph
Graph.prototype.addNode = function(data){
	this.nodes.push(node);
	return ++this.length;
};

// addEdge: When user adds a cycle to the graph,
// 		can only have one edge link/connection between the same set of Nodes
Graph.prototype.addEdge = function(nodeA, nodeB){
	var nA = this.nodes.filter(function(node){
		return node.data.id === nodeA;
	});

	var mB this.nodes.filter(function(node){
		return node.data.id === nodeB;
	});

	if (nA.length && nB.length) {
		nA[0].neighbors.push(nB[0]);
		nB[0].neighbors.push(nA[0]);
	}
};

/* Example #6: Graphs
	Objective
	- To determine which nodes contain articles that have not been read (see property: readBy)
	- And that the user will probably read

	Big Picture Solution
	- Generate Graph based on the data
	- Find an article the user and another 1+ users have also read
	- Create our own assumptions of probable articles that will be read */

// Create Empty Graph:
var g = new Graph(); // will contain nodes of article objects

// Add Nodes (with the data) to Graph
g.addNote(new Node({
	id: 1,
	articleId: 108,
	readBy: [{userId: 15}]
}));

g.addNote(new Node({
	id: 2,
	articleId: 505,
	readBy: [{userId: 16}]
}));

g.addNote(new Node({
	id: 3,
	articleId: 957,
	readBy: [{userId: 15}]
}));

g.addNote(new Node({
	id: 4,
	articleId: 984,
	readBy: [{userId: 16}]
}));

// Add Edges to connect
// Remember - Graph.prototype.addEdge = function(nodeA, nodeB)
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 2);
g.addEdge(4, 1);

function rec(userId) {
	// Assumption #1. Find articles that this.user and other user(s) HAVE read
	var articles = g.nodes.filter(function(node){
		return node.data.readBy.length > 1 &&
			node.data.readBy.filter(function(user){
				return user.userId === userId;
			}).length > 0;
	});

	if (articles.length === 0) {
		retrun g.nodes[0].articleId;
	}

	// 2. Find neighbor node for this.user that has NOT read
	var recs = articles.map(function(article){
		var nodes = article.neighbors.filter(function(node){
			return node.data.readBy.filter(function(user){
				return user.userId === userId;
			}).length === 0;
		});

	return node.length > 0 ? nodes[0].data : [];
	});

	return recs;
}

var recs = recd(15);













































































