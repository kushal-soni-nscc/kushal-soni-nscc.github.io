document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-btn');
    const dropdownNav = document.getElementById('dropdownNav');
    const navLinks = dropdownNav.querySelectorAll('a');

    // Toggle dropdown visibility on menu button click
    menuButton.addEventListener('click', function() {
        dropdownNav.style.display = dropdownNav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Close the dropdown when any link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdownNav.style.display = 'none';
        });
    });

    // Optional: Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!menuButton.contains(event.target) && !dropdownNav.contains(event.target)) {
            dropdownNav.style.display = 'none';
        }
    });
});
