function something()
	{
	
	localStorage.setItem('myKey', 'Ooops'); 

	var x = localStorage.getItem('myKey');
	
	alert(x);

 	}