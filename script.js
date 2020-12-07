const listTitle = document.querySelector('h1'); 
const button = document.getElementById("btn");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul")
const items = ul.getElementsByTagName("li");

let newListTitle = prompt("How would You like to name Your list?");
listTitle.innerHTML = newListTitle;


function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

function grabEventTarget(evt){
	evt = evt || window.event;
	return evt.target || evt.srcElement; // .srcElement fro IE .target for other browsers 
}

ul.onclick = function(evt){
	const target = grabEventTarget(evt);
	target.classList.toggle("done");
} 

function createListElement() {
	const btn = document.createElement("button");
    btn.innerHTML = "❌";
    btn.className = "liBtn";
	btn.onclick = removeParent;

	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);
	ul.appendChild(li);
	input.value=""; //cleare input field after every entry 
}

function inputLength(){
	return input.value.length;
}

function addToListAfterClick(){
	if(inputLength() > 0){
			createListElement();
		}
}

function addToListAfterKeypress(evt){
	if(inputLength() > 0 && evt.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterKeypress);



















