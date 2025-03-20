const form = document.querySelector('.signup-form');

    // --- Basic Form Validation ---
    form.addEventListener('submit', function(event) {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        if (!nameInput.value.trim() || !emailInput.value.trim() || !passwordInput.value.trim()) {
            event.preventDefault(); // Prevent form submission if fields are empty
            alert('Please fill in all fields.');
            return; // Stop further execution
        }
    })