

let items = [];


if (localStorage.getItem("items") === null) {
 localStorage.setItem("items", JSON.stringify(items)); 
}
else{
	items = JSON.parse(localStorage.getItem("items")); 	 
}



function addList(){
	a = document.getElementById('addTodoItem').value
	items.push(a);   

	


	document.getElementById('todoList').innerHTML = ""


	for(var i=0; i<=items.length-1; i++){
		let listItem=document.createElement('li')
		let textnode = document.createTextNode(items[i])
		listItem.appendChild(textnode)
		listItem.setAttribute("class","deleteli")


	document.getElementById('todoList').appendChild(listItem)
	var myatt = document.createAttribute("onclick");
	myatt.value = "line(this)";
	listItem.setAttributeNode(myatt); 
	


	var button = document.createElement("button");
	listItem.appendChild(button)
	button.innerHTML = "Delete"
	button.setAttribute("class","deletebutton")
	var myatt1 = document.createAttribute("onclick");
	myatt1.value = "deleteit(this)";
	button.setAttributeNode(myatt1); 

}
localStorage.setItem("items", JSON.stringify(items));
}


function line(e){
	e.classList.toggle("linethrough")
}


function deleteit(e) {
	var index = items.indexOf(e.parentElement.innerText.replace("Delete",""));
	items.splice(index, 1);  
	localStorage.setItem("items", JSON.stringify(items));
	document.getElementById('todoList').innerHTML = ""


	for(var i=0; i<=items.length-1; i++){
		let listItem=document.createElement('li')
		let textnode = document.createTextNode(items[i])
		listItem.appendChild(textnode)
		listItem.setAttribute("class","deleteli")


		document.getElementById('todoList').appendChild(listItem)
		var myatt = document.createAttribute("onclick");
		myatt.value = "line(this)";
		listItem.setAttributeNode(myatt); 



		var button = document.createElement("button");
		listItem.appendChild(button)
		button.innerHTML = "Delete"
		button.setAttribute("class","deletebutton")
		var myatt1 = document.createAttribute("onclick");
		myatt1.value = "deleteit(this)";
		button.setAttributeNode(myatt1); 

	} 

}

function showdata(){

	document.getElementById('todoList').innerHTML = ""


	for(var i=0; i<=items.length-1; i++){
		let listItem=document.createElement('li')
		let textnode = document.createTextNode(items[i])
		listItem.appendChild(textnode)
		listItem.setAttribute("class","deleteli")


		document.getElementById('todoList').appendChild(listItem)
		var myatt = document.createAttribute("onclick");
		myatt.value = "line(this)";
		listItem.setAttributeNode(myatt); 



		var button = document.createElement("button");
		listItem.appendChild(button)
		button.innerHTML = "Delete"
		button.setAttribute("class","deletebutton")
		var myatt1 = document.createAttribute("onclick");
		myatt1.value = "deleteit(this)";
		button.setAttributeNode(myatt1); 

	} 
	


}





