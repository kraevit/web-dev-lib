(function IIFE(){

	"use strict";

	// Обект XMLHttpRequest
	var xhr = createXmlHttpRequestObject();

	// Получаваме обекта XMLHttpRequest
	function createXmlHttpRequestObject()
	{
		var xhr;

		// Ако се използва IE
		if ( window.activeXObject )
		{
			try
			{
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e)
			{
				xhr = false;
			}
		}
		// Ако се използва друг браузър
		else
			{
				try
				{
					xhr = new XMLHttpRequest();
				}
				catch (e)
				{
					xhr = false;
				}
			}

		// Ако създаването на обекта HttpRequest претърпи неуспех
		if (!xhr)
		{
			console.error("Error creating XMLHttpRequest object.")
		}
/*		else
			{
				return xhr;
			}*/
		return xhr;
	}

	// Правим HTTP заявка
	function ajax() 
	{

		if ( xhr.readyState == 4 || xhr.readyState == 0 )
		{
			// Получаваме потребителското име, на полето за въвеждане във формата
			name = encodeURIComponent(document.getElementById("name").value);
			
			// Предаваме въведеното име на скрипта ajax.php
			xhr.open("GET", "ajax.php?name=" + name, true);

			xhr.onreadystatechange = processServerResponse();

			// Правим заявка към сървъра
			xhr.send(null);
		}
		else
			{
				// Ако връзката е заета правим 2ри опит след 1 секунда
				setTimeout('ajax()', 1000);
			}

		// Тази функция се изпълнява автоматично при получаване на отговор от сървъра
		function porcessServerResponse() 
		{
			if ( xhr.readyState == 4 )
			{
				// Статус 200 транзакцията е минала успешно
				if ( xhr.status == 200 )
				{
					// Извличаме XML, който сме получили от сървъра
					xmlResponse = xhr.reponseXML;
					xmlDocumentElement = xmlResponse.xmlDocumentElement;
					helloMessage = xmlDocumentElement.firstChild.data;
					
					// Обновяваме страницата: извеждаме получения от ajax.php резултат в див с име ourMessage
					document.getElementById("ourMessage").innerHTML = "<i>" + helloMessage + "</i>";

					// Рестартиране след 1 секунда
					setTimeout('ajax()', 1000);
				}
				// Ако статусът не е 200, значи е възникнала грешка
				else 
					{
						console.error("Error accessing the server: " + xhr.statusText);
					}
			}
		}

	}

})();