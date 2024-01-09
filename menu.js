
let cartCount = document.getElementById('cartCount');

const getCartCount = () => {
    let count = JSON.parse(localStorage.getItem("cart"));
    if (count !== null && count !== undefined) {   
        cartCount.innerHTML = count.length;
    }
}
getCartCount();

function getPrice(item) {
    let parent = item.parentNode;
    
    let price = parent.querySelector('.price');
    
    let priceValue = price.textContent.trim();
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cart.push(priceValue);

    localStorage.setItem("cart", JSON.stringify(cart));
    getCartCount();
    console.log(priceValue);
}

