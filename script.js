const mainTitle = document.getElementById('main-title');
mainTitle.textContent = "Welcome to Our Amazing Store!";

const footerText = document.getElementById('footer-text');
footerText.textContent = "© 2025 Your Favorite Store. Happy Shopping!";

const buyButtons = document.getElementsByClassName('buy-btn');
for (let btn of buyButtons) {
    btn.style.backgroundColor = "#008CBA"; // Blue color
}

const paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
    p.style.fontStyle = "italic";
}

const firstProduct = document.querySelector('.product-name');
firstProduct.style.color = "red";

const productPrices = document.querySelectorAll('.product-price');
productPrices.forEach(price => {
    price.style.fontSize = "18px";
    price.style.fontWeight = "bold";
});


for (let btn of buyButtons) {
    btn.addEventListener('click', function() {
        alert("Thank you for your purchase!");

        this.textContent = "Added to Cart!";
        this.style.backgroundColor = "green";
        this.style.cursor = "default";
        this.disabled = true;
    });
}
