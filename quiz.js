document.addEventListener("DOMContentLoaded", function () {
    // ... (existing code)

    function startHeadlights() {
        const headlightsContainer = document.createElement("div");
        headlightsContainer.className = "headlights-container";
        document.body.appendChild(headlightsContainer);

        function createHeadlight() {
            const headlights = document.createElement("div");
            headlights.className = "headlights";
            headlightsContainer.appendChild(headlights);

            let position = Math.random() * window.innerWidth / 2;
            let isMovingRight = true;

            function moveHeadlights() {
                if (position > window.innerWidth / 2 - headlights.offsetWidth) {
                    isMovingRight = false;
                } else if (position < 0) {
                    isMovingRight = true;
                }

                position += isMovingRight ? 5 : -5;
                headlights.style.left = position + "px";
            }

            setInterval(moveHeadlights, 50);
        }

        // Create four headlights
        for (let i = 0; i < 4; i++) {
            createHeadlight();
        }
    }

    window.startHeadlights = startHeadlights; // Expose startHeadlights globally

    // ... (existing code)

});
