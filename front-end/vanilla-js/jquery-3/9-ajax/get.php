<?php 
  header('Content-Type: text/html; charset=utf-8');
  if ( $_SERVER['HTTP_X_REQUESTED_WIDTH'] == 'XMLHttpRequest' )
  {
  	if ( $_GET )
  	{
  		echo 'Login: ' . $_GET['login'] . ', passaword: ' . $_GET['password'];
  	}
  }
 ?>