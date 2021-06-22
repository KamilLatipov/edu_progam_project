let likeButtons = document.getElementsByClassName('like-button');

Array.from(likeButtons).forEach((likeButton) => {
    initLikeButton(likeButton);
});

function initLikeButton(likeButton) {
    likeButton.addEventListener('click', handleLikeButtonClick);

    function handleLikeButtonClick(event) {
        let clickedElement = event.currentTarget;
        let iconElement = clickedElement.getElementsByClassName('like-button__icon');
        let countElement = clickedElement.getElementsByClassName('like-button__count');

        clickedElement.classList.toggle('like-button__clicked');
        if (clickedElement.classList.contains('like-button__clicked')) {
            iconElement[0].innerHTML = 'favorite &nbsp;';
            countElement[0].innerHTML = parseInt(countElement[0].innerHTML, 10) + 1;
        }
        else {
            iconElement[0].innerHTML = 'favorite_border &nbsp;';
            countElement[0].innerHTML = parseInt(countElement[0].innerHTML, 10) - 1;
        }
    }
}