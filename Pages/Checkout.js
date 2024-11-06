document.getElementById('setBilling').addEventListener('change', function() {
    const billingFields = document.getElementById('billed'); // Selecting by ID
    if (this.checked) {
        billingFields.style.display = 'block'; // Show the element
    } else {
        billingFields.style.display = 'none'; // Hide the element
    }
});
