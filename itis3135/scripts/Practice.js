var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	document.getElementById('Cappuccino').onclick = function() {CappuccinoOrder()};
	document.getElementById('Espresso').onclick = function() {EspressoOrder()};

	// for click event add item to order and update total
	var total = 0.0;
	function CappuccinoOrder() {
		document.getElementById('order').innerHTML += "$3.45 - Cappuccino - Delicious Cappuccino!";
		total = 3.45 + total;
		document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
	}

	function EspressoOrder() {
		document.getElementById('order').innerHTML += "$1.95 - Espresso - Delicious Espresso. Wanna try it?";
		total = 1.95 + total;
		document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
	}
	// display order and total
		
}; // end onload