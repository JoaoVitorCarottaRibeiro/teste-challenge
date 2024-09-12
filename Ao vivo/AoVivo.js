document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.Star');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            if (this.style.color === 'yellow') {
                this.style.color = ''; 
            } else {
                this.style.color = 'yellow';
            }
        });
    });
});
