function verifyName()
{
    var name=document.getElementById("input").value
	var nLength=name.length
	var regExp = /[A-Za-z]/ //valid name condition
    var regExp2 = /[0-9!@#$*]/ //invalid name condition
if(name.match(regExp2) || nLength<2)
	{
	//to fix cursor position
	document.getElementById("input").focus()
		document.getElementById("em").style.color="red"
	document.getElementById("em").innerHTML="Invalid"
	}
	else if(nLength>=2 && name.match(regExp))
	{
	//	document.getElementById("input").focus()
		document.getElementById("em").style.color="green"
		document.getElementById("em").innerHTML="valid"
	}
}