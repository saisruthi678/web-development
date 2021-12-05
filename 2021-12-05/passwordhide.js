function password()
{
	document.getElementById("one").removeAttribute("type")
}
	function hidepassword()
	{
		document.getElementById("one").setAttribute("type","password")
	}


		function showhodepassword()
		{
			var typeofinputbox=document.getElementById("one").getAttribute("type")

			document.write("type of input box=  " + typeofinputbox)
		
			if (typeofinputbox == "password")
			{
				//show
				document.getElementById("one").setAttribue("type","text")
				//password()
			}
				else
				{
					//hide
			document.getElementById("one").setAttribue("type","password")
			//hidepassword()
				}
		}