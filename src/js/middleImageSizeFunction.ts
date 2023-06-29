window.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.querySelector('main') as HTMLElement;
    const graphicElement = document.querySelector('.middle-image-container') as HTMLElement;

    function updateHeight() {
        const mainHeight = mainContainer.offsetTop + mainContainer.offsetHeight;
        const graphicContainerHeight = mainHeight - 528;
        graphicElement.style.height = `${graphicContainerHeight + 105}px`;
    }

    // Initial call to update the height
    updateHeight();

    // Call updateHeight() whenever the window is resized
    window.addEventListener('resize', updateHeight);
});