$(document).ready(function() {
	/*When the 'submit' button is clicked, it will first see if there were
	any numbers entered in the text box. To account for the possibility of
	extra spaces, it splits the submission based on spaces and joins it back
	 together. If no data was entered, it wiill exit the function. */
	$('#submit').click(function() {
		var numbers = document.getElementById("numbers").value;
		numbers = numbers.split(" ").join("")
		if (numbers == ""){
			printToPage("No numbers entered. Please enter numbers in the text box above.")
			return;
		};

		/* If data was entered, it will then validate the data by checking
		if any letters were entered or if an extra comma was entered. Depending
		on the situation, a message will appear to explain the issue. If there
		are no issues, each index will become a floating interger (in the case 
		that decimals are entered).*/
		var sortArray = numbers.split(",");
		for (j = 0; j < sortArray.length; j++) {
			console.log(isNaN(sortArray[j]));
			if(sortArray[j] == ""){
				printToPage("You may have added an extra comma after " + sortArray[j-1] +". Please enter data in the correct format.")
				return;
			}
			else if(isNaN(sortArray[j])){
				printToPage("Invalid input. Please enter numbers only.")
				return;
			}
			else{
				sortArray[j] = parseFloat(sortArray[j])
			}
		}

		/* Once the input has been analyzed, the function to sort the numbers
		is called using the array created.*/
		return bubbleSort(sortArray);
	})

	/* If there is already a message on the page, it will replace the old message
	with the new one. If there is no message, it will place the message on the
	page.*/
	function printToPage(msg) {
		if(document.getElementById("message") != null){
			document.getElementById("message").innerHTML = msg;
		}
		else{
		var message = "<p id=\"message\">" + msg + "<\p>";
		$("#result").append(message);
		}
	}

	/* This function is used in the function 'bubbleSort' to swap the numbers
	from the specified array. It uses a temporary variable to store the first
	number so that the numbers will be switched correctly.*/
	function swap(array, num1, num2) {
		var temp = array[num1];
		array[num1] = array[num2];
		array[num2] = temp;
	}

	/* This function takes the array created from the user input to sort the
	numbers in numerical order. While the sort is running, it is counting the
	number of swaps made. If there were no swaps made, then it will exit the
	loop and print the results to the page.*/
	function bubbleSort(numbersArray) {
		var arrayLength = numbersArray.length;
		var sort = true;
		while (sort) {
			var countSwaps = 0
			for (var j = 0; j < arrayLength; j++) {
				if (numbersArray[j] > numbersArray[j + 1]) {
					swap(numbersArray, j, j + 1);
					countSwaps++;
				}
			}
			if (countSwaps == 0) {
				sort = false;
			}
		}
		printToPage("Ordered Results:\n" + numbersArray)
	}
});