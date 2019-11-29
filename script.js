

let input = document.getElementById("input").value;
let task = document.createTextNode(input);
let newTask = document.createElement("li");


function toDoList(){
  newTask.appendChild(task);
  document.getElementById("toDoList").appendChild(newTask);
  input.value = '';
  console.log("add button pressed");
  if(newTask.children.length >= 10){
    alert("Oops! You need to complete a task first!");
  }
};




let clear = document.getElementById("clear");
clear.addEventListener('click', () => {
  console.log("clear item button")
for (i = 0; i < newTask.children.length; i++) {
  newTask.children[i].style = "display: none";
}
}); 

  document.querySelector('li')[
    document.addEventListener ? 'addEventListener' : 'attachEvent'
    ]('click', function() {
      this.style.textDecoration = this.style.textDecoration === 'none' ?
          'line-through' : 'none';
});




/*-------------------------------------------------------------------------


/*
  if(li.length >= 10){
    alert("Oops! You need to complete a task first!");
  }



let trashButton = document.getElementById("trash");
trashButton.addEventListener('click', () => {
  console.log("trash clicked")
});

let checkButton = document.getElementById("check");
checkButton.addEventListener('click', () => {
  console.log("check clicked");
  striked();
});
*/