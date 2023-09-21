const selectColor = document.querySelector("#color");
const productPicture = document.querySelector(".product__picture");
const productImages = document.querySelectorAll(".product__image")


document.addEventListener("click", (event) => {
    if (event.target.classList.value === "product__image") {
        productImages.forEach(el => el.classList.remove("active"));
        event.target.classList.add("active");
        productPicture.classList.add("product__picture-animation");
        productPicture.classList.remove("product__picture");
        productPicture.src = event.target.src;
        selectColor.value = event.target.name;
        setTimeout(() => {
            productPicture.classList.remove("product__picture-animation");
            productPicture.classList.add("product__picture");
        }, 500)
    }
})

selectColor.addEventListener("change", (event) => {
    productPicture.src = `./img/${event.target.value}.png`;
    productImages.forEach((el) => {
        el.classList.remove("active")
        if (el.name === event.target.value) {
            el.classList.add("active");
        }
    })
})