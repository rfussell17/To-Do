
let toDoList = [];
let input = document.querySelector("input");
let list = document.querySelector("ul");
let listItem = document.querySelectorAll("li") ;
let deleteToDo = document.querySelectorAll("X");

//toDo.push(newTask);

function toDo(){
  li.appendChild(input);
  ul.appendChild(li);
  }


function crossOffToDo(){
 document.getElementById('li').addEventListener('click', () => {
  document.getElementById("li").style.color = "grey";
  document.getElementById("li").style.textDecoration = "line-through";
  console.log("li clicked");
  });
}
    /*
  const input = document.getElementById("input");
  let li = document.createElement("li")
  let txtNode = document.createTextNode(input);


     */
