let currentPage = 0;
const pages = document.querySelectorAll('.page');

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.transform = 'rotateY(-180deg)';
            currentPage++;
        }
    } else if (e.key === 'ArrowLeft') {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].style.transform = 'rotateY(0deg)';
        }
    }
});
