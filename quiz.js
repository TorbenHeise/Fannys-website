{
    const headlights = document.createElement("div");
    headlights.className = "headlights";
    document.body.appendChild(headlights);

    let position = 0;
    let isMovingRight = true;

    function moveHeadlights() {
        if (position > window.innerWidth - headlights.offsetWidth) {
            isMovingRight = false;
        } else if (position < 0) {
            isMovingRight = true;
        }

        position += isMovingRight ? 5 : -5;
        headlights.style.left = position + "px";
    }

    setInterval(moveHeadlights, 50);
});
