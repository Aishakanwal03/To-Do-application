// var list = document.getElementById("list")
// var li1 = document.createElement("li")
// list.appendChild("li1")
// var editBtn = document.createElement("button")
// var dltBtn = document.createElement("button")
// li1.appendChild("editBtn")
// li1.appendChild("dltBtn")
var change = "edit"
function addToList(){
    if (change == "edit"){
    var list = document.getElementById("list")

    var div1 = document.createElement("div")
    div1.setAttribute("id", "div1")
    var li1 = document.createElement("p")
    li1.setAttribute("class", "para")

    var btnspan = document.createElement("p")

    btnspan.setAttribute("class", "btn")
    
    
    
    
    var input = document.getElementById("input")

    var val = input.value
    if (val == ""){
        alert("Please Enter task to do")
    }else {
        list.appendChild(div1)
        div1.appendChild(li1)
        div1.appendChild(btnspan)
        li1.innerHTML = "* "+val
        
        input.value = ""
        
        var eBtn = document.createElement("button")
        var dBtn = document.createElement("button")
        eBtn.innerHTML = "Edit"
        dBtn.innerHTML = "Delete"
        eBtn.setAttribute("onclick", "edit(this)")
        dBtn.setAttribute("onclick", "dlt(this)")
        btnspan.appendChild(eBtn)
        btnspan.appendChild(dBtn)    

    }
}
}
 

function deleteAll(){

    var list = document.getElementById("list")
    list.innerHTML = ""
}

function dlt(x){

    var ele = x.parentElement.parentElement.remove()
}

function edit(x){
    if(change == "edit" && x.innerHTML == "Edit"){
    var para = x.parentElement.parentElement.firstChild
    var editInput = document.createElement("input")
    editInput.setAttribute("id", "editInput")
    
    var val = para.innerHTML
    val = val.slice(1,)
    para.innerHTML =""
    para.appendChild(editInput)
    editInput.value= val
    x.innerHTML= "Update"
    change = "update"
    }else if(change == "update" && x.innerHTML == "Update"){
        var para = x.parentElement.parentElement.firstChild
        var val = para.firstChild.value 
        para.innerHTML = "* "+val
        x.innerHTML= "Edit"
        change = "edit"
        


    }
}