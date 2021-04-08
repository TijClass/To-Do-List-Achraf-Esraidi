
var button = document.querySelector("#enter");
var input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

/*  For now the i element is not there we will create it */
const deleteButton = document.getElementsByTagName("i");

var clearButton = document.getElementById("clear");

console.log(button);
console.log(input);
console.log(ul);
console.log(li);
console.log(deleteButton);
console.log(clearButton);
console.log(inputLength(li))
/* Functions code here */
function inputLength(e){
  return  e.length;
}

function createListElement(){
  let div = document.createElement('div')
  let elmnt = document.createElement('li')
  let input = document.getElementById('userinput').value
  elmnt.innerHTML = input;
  div.classList.add("li-wrapper")
  div.appendChild(elmnt)
  return div ;
}

/*        Fin           */
button.addEventListener("click", e => {
  e.preventDefault();
  ul.appendChild(createListElement());
});
clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();
