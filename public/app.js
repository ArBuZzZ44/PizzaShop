function something()
	{
	
	var x = localStorage.getItem('myKey');
	
	x = x * 1 + 1;

	localStorage.setItem('myKey', x); 

	alert(x);

 	}

 function add_to_cart(id)
	{

		var key = "product_" + id;
		var x = localStorage.getItem(key);
		x = x * 1 + 1;
		localStorage.setItem(key, x);

 	}