// Function to flip the panel
function flipPanel(panelId) {
    const panelGroup = document.getElementById(panelId); // Get the corresponding panel group

    // Find the current visible panel and the next one
    const panels = panelGroup.getElementsByClassName('panel');
    let currentPanel = Array.from(panels).find(panel => !panel.classList.contains('flipped'));
    
    if (currentPanel) {
        // Mark the current panel as flipped
        currentPanel.classList.add('flipped');
        currentPanel.style.display = 'none';

        // Show the next panel (if any)
        const nextPanel = currentPanel.nextElementSibling;
        if (nextPanel) {
            nextPanel.style.display = 'inline-block';
        }
    }
}
