// main.js

// Function to flip the panel
function flipPanel(panelId) {
    // First, hide all panel groups
    const panelGroups = document.querySelectorAll('.panel-group');
    panelGroups.forEach(group => {
        group.style.display = 'none';
    });

    // Then, show the panel group associated with the clicked panel
    const activePanelGroup = document.getElementById(panelId);
    
    // Log for debugging
    console.log(`Showing panel group: ${panelId}`);

    activePanelGroup.style.display = 'block';
}
