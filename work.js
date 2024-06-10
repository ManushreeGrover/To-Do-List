let btn=document.getElementById("btn");
let list=document.getElementById("list");
let btn1=document.getElementById("edit button");

btn.addEventListener("click", function(){
    let task=document.getElementById("taskbox").value;
    if (task.trim() === "") return;
    // console.log(task);
    let listItem=document.createElement("li");
    listItem.innerText=task;
    let but=document.createElement("button");
    let but1=document.createElement("button");
    but.className="btn btn-delete"; 
    but.innerText="X";
    but1.className="btn btn-edit";
    but1.innerText="Edit";
    but.style="float: right; background-color: black; color:white; font-family: Permanent Marker; font-size:20px";
    but1.style="float: right; background-color: black; color:white ; font-family: Permanent Marker; font-size:20px; margin-right:4px";
    listItem.appendChild(but);
    listItem.appendChild(but1);
    listItem.className="list-group-item";
    listItem.style="background-color: pink; border:5px dotted purple";
    list.appendChild(listItem);
    document.getElementById("taskbox").value = "";
})

list.addEventListener("click",function(e){
    if(e.target.classList.contains("btn-edit")){
        let newTaskText = prompt('Edit your task:');
                if (newTaskText !== null && newTaskText.trim() !== '') {
                  e.target.parentElement.firstChild.textContent=newTaskText;
                }
    }
})

list.addEventListener("click",function(e){
     if(e.target.classList.contains("btn-delete")){
        list.removeChild(e.target.parentElement);
    }
 })

    