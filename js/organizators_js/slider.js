document.addEventListener('DOMContentLoaded', function () {
    const cardsToMove = 3; // Number of cards to move in one slide
    const cardWidth = 300; // Width of a single card
    const cardSpacing = 10; // Spacing between cards

    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');
    const cardsContainer = document.querySelector('.cards-container');

    if (!prevButton || !nextButton || !cardsContainer) {
        console.error('Navigation buttons or cards container not found.');
        return;
    }

    let currentOffset = 0; // Tracks the current position

    const slideWidth = cardsToMove * (cardWidth + cardSpacing); // Width to slide by
    const totalCards = document.querySelectorAll('.card').length; // Total number of cards
    const visibleWidth = 950; // Width of the visible area of the cards container
    const totalWidth = totalCards * (cardWidth + cardSpacing); // Total width of all cards

    nextButton.addEventListener('click', () => {
        if (currentOffset < totalWidth - visibleWidth) {
            currentOffset += slideWidth; // Move by 3 cards
            currentOffset = Math.min(currentOffset, totalWidth - visibleWidth); // Ensure we don't go past the end
            cardsContainer.style.transform = `translateX(-${currentOffset}px)`; // Apply the new position
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentOffset > 0) {
            currentOffset -= slideWidth; // Move back by 3 cards
            currentOffset = Math.max(currentOffset, 0); // Ensure we don't go before the start
            cardsContainer.style.transform = `translateX(-${currentOffset}px)`; // Apply the new position
        }
    });
});
