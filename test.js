var button = document.getElementById('chefimg').getElementsByTagName('a');
var content = document.getElementById('content');

button.onclick = function(){
	if (content.className == 'open') 
	{
		content.className = "";
		button.innerHTML = "Show More";
	}
	else
	{
		content.className = "open";
		button.innerHTML = "Show Less";
	}
};