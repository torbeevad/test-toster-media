const stars = document.querySelectorAll(".star")

document.addEventListener("click", (event) => {
    stars.forEach(el => {
        if (el.id <= event.target.id) {
            el.classList.add("star-active")
        } else {
            el.classList.remove("star-active")
        }
    })
})



