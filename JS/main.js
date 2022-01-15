// Active accordon
let boxs = document.querySelectorAll('.accordon .box');

boxs.forEach((box) => {
    box.onclick = function () {
        box.classList.toggle('active');
    }
});