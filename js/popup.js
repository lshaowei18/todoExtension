console.log("popup.js loaded!");

let btn = document.getElementById('btnAdd');
let input = document.getElementById('newToDo');
let newToDo = document.getElementById('newToDo').value;
let list = document.getElementById('list');


console.log(list);
let eventList = ["change", "paste", "keyup"] //Array of eventList

//Event Function
let eventHandler = function(){
  newToDo = input.value;
  console.log(newToDo);
}

//Add event listeners using foreach
eventList.forEach(event => input.addEventListener(event, eventHandler));

//Add event listener to button
btn.addEventListener("click", function(){
  let li = document.createElement("LI");
  let liText = document.createTextNode(newToDo);
  console.log(newToDo, li, liText);
  console.log(li);
  console.log(liText);
  li.appendChild(liText);
  list.appendChild(li);
});
