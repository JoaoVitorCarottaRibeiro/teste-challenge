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

document.querySelectorAll('.opcoes').forEach(option => {
    option.addEventListener('click', function(event) {
      event.preventDefault();
      let selectedOption = this.getAttribute('data-value');
    });
  });