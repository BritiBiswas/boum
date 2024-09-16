// Add event listeners to all "Buy Now!" buttons
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        // Get the price of the clicked product
        const priceElement = this.parentElement.querySelector('.price');
        const price = parseFloat(priceElement.innerText);

        // Update the total price
        const totalValue = document.getElementById('total');
        const total = parseFloat(totalValue.innerText);
        const totalPrice = total + price;
        totalValue.innerText = totalPrice.toFixed(2); // Ensure two decimal places

        // Update the quantity
        const quantity = document.getElementById('quantity');
        const quantityValue = parseFloat(quantity.innerText);
        const totalQuantity = quantityValue + 1;
        quantity.innerText = totalQuantity;
    });
});
