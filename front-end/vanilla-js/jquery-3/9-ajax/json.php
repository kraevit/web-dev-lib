<?php 
	header('Content-Type: text/html; charset=utf-8'); // IMPORTANT ENCODING MUST BE utf-8

	if ( $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')
	{
		echo '[
				{ "country":"Bulgaria", "capital":"Sofia" },
				{ "country": "Ukraine", "capital": "Kiev" },
				{ "country": "Russia", "capital": "Moscow" }]';
	}	
 ?>