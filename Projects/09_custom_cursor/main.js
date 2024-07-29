const body = document.querySelector("body");
const cursor = document.querySelector(".cursor");

body.addEventListener("mousemove", function (dets) {
    // console.log(e.clientX, e.clientY);
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});
