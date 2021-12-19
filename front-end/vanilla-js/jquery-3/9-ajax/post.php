<?php 
	header('Content-Type: text/html; charset=utf-8');
	if ( $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest' )
	{
		if ( $_POST )
		{
			echo 'Login: ' . $_POST['login'] . ', password: ' . $_POST['password'];
		}
	}
?>