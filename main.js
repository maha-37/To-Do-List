let input = document.querySelector(".input")
let submit = document.querySelector(".submit")
let ul = document.querySelector(".task-ul")

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let li = document.createElement("li")
    if (input.value !== "") {
        li.innerHTML = input.value
        li.setAttribute("class", "task")
        ul.appendChild(li)
        let remove = document.createElement("i")
        remove.className = "fa-solid fa-xmark"
        remove.setAttribute("id", "remove")
        li.appendChild(remove)
    }

    input.value = ""

})
ul.addEventListener("click", (e) => {
    if (e.target.tagName === ("LI")) {
        e.target.classList.toggle("checked")

    }
    else if (e.target.tagName === ("I")) {
        e.target.parentElement.remove();
    }
})

















