let date = new Date(2023, 9, 23)

function countdownTimer() {

    const diff = date - new Date()

    const hours = Math.floor(diff / 1000 / 60 / 60) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.querySelector(".timer__hours").innerText = hours > 9 ? hours : `0${hours}`;
    document.querySelector(".timer__minutes").innerText = minutes > 9 ? minutes : `0${minutes}`;
    document.querySelector(".timer__seconds").innerText = seconds > 9 ? seconds : `0${seconds}`;
}

setInterval(countdownTimer, 1000)
