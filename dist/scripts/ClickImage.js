// get all elements with the class "blogimg"
const postImages = document.querySelectorAll('.blogimg');

// create overlay element
const overlay = document.createElement('div');
overlay.classList.add('overlayimg');

// track the clicks!
postImages.forEach((postImage) => {
postImage.addEventListener('click', () => {
    // remove previously opened images
    const existingPopup = overlay.querySelector('.popup-img');
    if (existingPopup) {
    existingPopup.remove();
    }

    // create image element for the popup
    const popupImage = document.createElement('img');
    popupImage.src = postImage.src;
    popupImage.classList.add('popup-img');

    // append the popup image to the overlay
    overlay.appendChild(popupImage);

    // append the overlay to the document body
    document.body.appendChild(overlay);

    // add click event listener to the overlay
    overlay.addEventListener('click', () => {
    // remove the overlay and the popup image when overlay is clicked
    overlay.remove();
    });
});
});