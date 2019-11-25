
  const input = document.getElementById("input");
  let li = document.createElement("li")
  let txtNode = document.createTextNode(input);

  function toDo(){
  li.appendChild(txtNode);
  list.appendChild(li)
  }
  
  function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      alert('You pressed enter! - plain javascript');
    }
}

  if (e.keyCode == 13) {
      const toDo = input.value;
      if(toDo){
        addTodo(toDo);
      }
      input.value = "";
     }
     
      