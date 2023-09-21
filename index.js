const selectColor = document.querySelector("#color")
const productPicture = document.querySelector(".product__picture")
document.addEventListener("click", (event) => {
    if (event.target.classList.value === "product__image") {
        document.querySelectorAll(".product__image").forEach(el => el.classList.remove("active"))
        event.target.classList.add("active")
        productPicture.src = event.target.src
        selectColor.value = event.target.name
    }
})

selectColor.addEventListener("change", (event) => {
    productPicture.src = `./img/${event.target.value}.png`
})


