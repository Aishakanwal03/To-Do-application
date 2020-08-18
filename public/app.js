
var change = "edit"

firebase.database().ref("toDoTask").on("child_added", function (data) {
    console.log(data.val())

    var input = document.getElementById("input")
    var val = input.value

    var div1 = document.createElement("div")
    div1.setAttribute("id", "div1")
    var li1 = document.createElement("p")
    li1.setAttribute("class", "para")

    var btnspan = document.createElement("p")

    btnspan.setAttribute("class", "btn")
    list.appendChild(div1)
    div1.appendChild(li1)
    div1.appendChild(btnspan)

    li1.innerHTML = "* " + data.val().task

    input.value = ""

    var eBtn = document.createElement("button")
    var dBtn = document.createElement("button")
    eBtn.innerHTML = "Edit"
    dBtn.innerHTML = "Delete"
    eBtn.setAttribute("onclick", "edit(this)")
    dBtn.setAttribute("onclick", "dlt(this)")
    dBtn.setAttribute("id", data.val().key)
    eBtn.setAttribute("id", data.val().key)
    btnspan.appendChild(eBtn)
    btnspan.appendChild(dBtn)
})

function addToList() {
    if (change == "edit") {

        var input = document.getElementById("input")

        var val = input.value
        if (val == "") {
            alert("Please Enter task to do")
        } else {
            var key = firebase.database().ref("toDoTask").push().key
            var obj = {
                task: val,
                key: key
            }
            firebase.database().ref("toDoTask").child(key).set(obj)

        }
    }
}


function deleteAll() {
    firebase.database().ref("toDoTask").remove()
    var list = document.getElementById("list")
    list.innerHTML = ""
}


function dlt(x) {
    firebase.database().ref("toDoTask").child(x.id).remove()
    var rmv = x.parentElement.parentElement.remove()

}

function edit(x) {
    if (change == "edit" && x.innerHTML == "Edit") {
        var para = x.parentElement.parentElement.firstChild
        var editInput = document.createElement("input")
        editInput.setAttribute("id", "editInput")

        var val = para.innerHTML
        val = val.slice(1,)
        para.innerHTML = ""
        para.appendChild(editInput)
        editInput.value = val
        x.innerHTML = "Update"
        change = "update"
    } else if (change == "update" && x.innerHTML == "Update") {
        var para = x.parentElement.parentElement.firstChild
        var val = para.firstChild.value
        if (val == "") {
            alert("Empty task cann't be update!")
        } else {
            var updateObj = {
                task: val,
                key: x.id
            }
            firebase.database().ref("toDoTask").child(x.id).set(updateObj)
            para.innerHTML = "* " + val
            x.innerHTML = "Edit"
            change = "edit"

        }

    }
}