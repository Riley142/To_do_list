const listTitle = document.querySelector('h1'); 
const button = document.getElementById("btn");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul")
const deleteBtns = document.getElementsByClassName("delete");
const items = ul.getElementsByTagName("li");

newListTitle = prompt("How would You like to name Your list?");
listTitle.innerHTML = newListTitle;


function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function getEventTarget(e){
	e = e || window.event;
	return e.target || e.srcElement;
}

ul.onclick = function(event){
	const target = getEventTarget(event);
	target.classList.toggle("done");
}

function createListElement() {
	const btn = document.createElement("button");
    btn.innerHTML = "❌";
    btn.className = "liBtn";
	btn.onclick = removeParent;

	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";
}

function inputLength(){
	return input.value.length;
}

function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

function addToListAfterKeypress(event){
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);



















