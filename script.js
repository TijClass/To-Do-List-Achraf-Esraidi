
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


/*        Fin           */

clearButton.addEventListener("click", clearList);
ul.addEventListener("click", strikeThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
createDeleteButtonIcon();
deleteParentNodeOnClick();
