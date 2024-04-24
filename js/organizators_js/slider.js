document.addEventListener('DOMContentLoaded', function () {
    const cardsToMove = 3; // Number of cards to move in one slide
    const cardWidth = 300; // Width of a single card
    const cardSpacing = 10; // Spacing between cards

    // Navigation buttons and container
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const cardsContainer = document.querySelector('.cards-container');

    if (!prevButton || !nextButton || !cardsContainer) {
        console.error('Navigation buttons or cards container not found.');
        return;
    }

    let currentOffset = 0; // Current position of slider

    const slideWidth = cardsToMove * (cardWidth + cardSpacing); // Distance to slide
    const totalCards = document.querySelectorAll('.card').length; // Total number of cards
    const visibleWidth = 950; // Width of the visible area
    const totalWidth = totalCards * (cardWidth + cardSpacing); // Total width of all cards

    nextButton.addEventListener('click', () => {
        if (currentOffset < totalWidth - visibleWidth) {
            currentOffset += slideWidth;
            currentOffset = Math.min(currentOffset, totalWidth - visibleWidth);
            cardsContainer.style.transform = `translateX(-${currentOffset}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentOffset > 0) {
            currentOffset -= slideWidth;
            currentOffset = Math.max(currentOffset, 0);
            cardsContainer.style.transform = `translateX(-${currentOffset}px)`;
        }
    });
});
