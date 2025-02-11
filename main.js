document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach(panel => {
        panel.addEventListener("click", () => {
            // Log the current class list of the panel when it's clicked
            console.log(panel.classList); // This will show the class list of the clicked panel

            // Toggle the 'flipped' class when a panel is clicked
            panel.classList.toggle("flipped");
        });
    });

    // HANDLE the "Next Set" button to change to the next panel set
    const nextButton = document.getElementById("nextButton");
    let currentSet = 1;

    nextButton.addEventListener("click", () => {
        // Hide the current set
        document.getElementById(`set${currentSet}`).classList.remove("active");

        // Show the next set
        currentSet++;
        if (currentSet <= 5) {  // Assuming there are 5 sets
            document.getElementById(`set${currentSet}`).classList.add("active");
        }
    });
});
