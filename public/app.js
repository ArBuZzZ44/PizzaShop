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

		alert("There are " + get_cart_quantity() + " pizzas in your cart");
 	}

function get_cart_quantity()
	{
		var cnt = 0;

		for(var i = 0; i < localStorage.length; i++)
		{
			var key = localStorage.key(i); // получаем ключ
			var value = localStorage.getItem(key); //получаем значение

			if(key.indexOf("product_") == 0)
			{
				cnt = cnt + value * 1;
			}
		}
		return cnt;
	}