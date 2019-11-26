/*
  const input = document.getElementById("input");
  let li = document.createElement("li")
  let txtNode = document.createTextNode(input);

  function toDo(){
  li.appendChild(txtNode);
  list.appendChild(li)
  }
  

  if (e.keyCode == 13) {
      const toDo = input.value;
      if(toDo){
        addTodo(toDo);
      }
      input.value = "";
     }
     */


function crossOffToDo(){

  let checkToDo = document.getElementById('li');
  checkToDo.style.color = "gray";
  checkToDo.style.textDecorationLinethrough;
  
    console.log("li clicked");
}
    checkToDo = document.getElementById('li').addEventListener('click', () => {
      crossOffToDo();
    });