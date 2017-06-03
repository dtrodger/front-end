// jQuery Docs on document ready
// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.

$( document ).ready(function() {
    // Object 
	var james = {
		job: "Programer",
		married: false
	}

	// Variable
	var aProperty = "job"

	// Index property of an object
	console.log(james[aProperty])
});
