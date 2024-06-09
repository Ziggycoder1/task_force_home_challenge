document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const closeModal = document.querySelector('.close');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImage.src = this.getAttribute('data-full');
            captionText.innerHTML = this.querySelector('h2').innerHTML;
        });
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
