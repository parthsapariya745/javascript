let btn = document.getElementById("btn")
let empty = document.getElementById("empty")

btn.addEventListener("click", function() {
  let newTask = document.getElementById("newTask").value
  let remove = document.getElementById("newTask")
  
  if (newTask.length >= 1) {
    let create = document.getElementById("create")
    create.innerHTML += `
      <li>
        <span class="task-text">${newTask}</span>
        <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn" onclick="deleteItem()">Delete</button>
        </div>
      </li>`
  }
  else {
    empty.innerText = `*please enter your task`
  }
  remove.value = ''
})
// let addItem = (()=>{
// })

// let deleteItem = (()=>{

// })