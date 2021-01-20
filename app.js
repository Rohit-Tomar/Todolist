// SELECTORS
const submitBtn = document.querySelector(".btn");
const input = document.querySelector(".txt");
const wholeList = document.querySelector(".myUL");

// EVENT LISTENERS
submitBtn.addEventListener("click", addItems);
wholeList.addEventListener("click", deleteItem);

// FUNCTIONS
function addItems(event){
    event.preventDefault();

    if(input.value == ""){
        alert("Please Enter Some Text");
        return;
    }

    // list-item Div
    let div = document.createElement("div");
    div.classList.add("list-item");
    // li inside the div
    let li = document.createElement("li");
    li.classList.add("myLi");
    li.innerText = input.value;
    input.value = "";
    div.appendChild(li);
    // update button
    let updateBtn = document.createElement("button");
    updateBtn.classList.add("update");
    updateBtn.innerText = "Update";
    div.appendChild(updateBtn);
    //  tick button
    let tickBtn = document.createElement("button");
    tickBtn.innerHTML = '<i class="fas fa-check"></i>';
    tickBtn.classList.add("tick");
    div.appendChild(tickBtn);
    // trash button
    let trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash");
    div.appendChild(trashBtn);

    wholeList.appendChild(div);
}

function deleteItem(event){
    let item = event.target;
    // delete btn
    if(item.classList[0] === "trash"){
        let parent = item.parentElement;
        parent.remove();
    }
    // mark as completed
    else if(item.classList[0] === "tick"){
        let parent = item.parentElement;
        parent.classList.toggle("cut-line");
        console.log(parent);
    }
    // update
    else if(item.classList[0] === "update"){
        // console.log("Hello");
        let parent = item.parentElement;
        let childArray = parent.childNodes;
        let textToUpdate = childArray[0].innerText;
        input.value = textToUpdate;
        parent.remove();
    }
}

