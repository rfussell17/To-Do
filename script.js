


function addToDo(e){

  const form = document.getElementById("form")
  const list = document.querySelector(".list");
  const listItem = document.getElementById("li") ;
  let deleteToDo = document.getElementById("trash");
  const li = document.createElement('li');
  const input = document.getElementById("input");  

    e.preventDefault();
  if(input.value === ''){
    alert("You need to input something!");
  }

let textNode = document.createTextNode(input.value);
li.appendChild(textNode);

  
  li.className = 'li';
  li.appendChild(document.createTextNode(input.value));
  const link = document.createElement('a');
  link.innerHTML = '<i class="far fa-trash-alt"></i>';
  li.appendChild(link);

  input.appendChild(li);
  input.value ='';
  }









//Check item as done --- COMPLETED

  document.querySelector('li')[
    document.addEventListener ? 'addEventListener' : 'attachEvent'
    ]('click', function() {
      this.style.textDecoration = this.style.textDecoration === 'none' ?
          'line-through' : 'none';
});















    /*
  const input = document.getElementById("input");
  let li = document.createElement("li")
  let txtNode = document.createTextNode(input);


     */
