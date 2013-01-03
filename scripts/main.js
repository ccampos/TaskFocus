// THESE buttons
var nextBtn = $('button.next');
var previousBtn = $('button.previous');

// THIS DOM element to display list in
var displayDOM = $('div.wrapper input');

// get THIS list and length
var result = getThisListInstance();
var listlength = result.length;

// Previous Button Click
var iter = -1;
previousBtn.click(function() {

	// decrement
	if ( iter > 0 ) {
		iter -= 1;
	} else {
		iter = listlength - 1;
	}

	// display
	displayDOM.val(result[iter]);
});

// Next Button Click
nextBtn.click(function() {

	// increment
	if ( iter < listlength - 1 ) {
		iter += 1;		
	} else {
		iter = 0;
	}

	// display
	displayDOM.val(result[iter]).fadeIn(400, display());

	function display() {
		displayDOM.hide();
	}
	
});

// get list for THIS particular exercise
function getThisListInstance() {
	var json = getJSON('json/tasks.json');
	var list = getTaskList(json);

	return list;
};

/**
* Returns list of tasks
* @method getTaskList
* @param {json array} taskListJ
**/
function getTaskList(taskListJ) {

	var taskListF = taskListJ,
		response = [];

	for ( var i = 0, max = taskListF.length; i < max; i += 1) {
		response[i] = getTask(taskListF[i]);
	};

	return response;

	/**
	* Returns a task description
	* @method getTask
	* @param {json object} task
	**/
	function getTask(task) {
		
		var taskF = task;

		return taskF.description;
	};
};

/**
* Returns a JSON object
* @method getJSON
* @param {string} url
**/
function getJSON(url) {

	var jsonF;

	$.ajax({
		async: false,
		url: url,
		success: function(j) {
			jsonF = j;
		},
		error: function(e) {
			console.error("JSON error: " + e);
		}
	});

	return jsonF;
};