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

		update_orders_input();
		update_orders_button();
 	}

 function update_orders_input()
 	{
 		var orders = cart_get_orders();
 		$("#orders_input").val(orders);
 	}

function update_orders_button()
	{
		var text = "Cart (" + get_cart_quantity() + ")";
		$("#orders_button").val(text);

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

function cart_get_orders()
	{
		var orders = "";

		for(var i = 0; i < localStorage.length; i++)
		{
			var key = localStorage.key(i); // получаем ключ
			var value = localStorage.getItem(key); //получаем значение

			if(key.indexOf("product_") == 0)
			{
				orders = orders + key + "=" + value + ",";
			}
		}
		return orders;
	}

function cancel_order()
	{
		localStorage.clear();
		return false;

		update_orders_input();
		update_orders_button();
	}
