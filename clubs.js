document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var card = btn.closest('.card');
            var hiddenContent = card.querySelector('.hidden-content');

            if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
                hiddenContent.style.display = 'block';
                card.style.height = 'auto';
                btn.textContent = 'Read Less'; // Change button text to "Read Less"
            } else {
                hiddenContent.style.display = 'none';
                card.style.height = '400px'; // Adjust height to initial height
                btn.textContent = 'Read More'; // Change button text to "Read More"
            }
        });
    });
});
