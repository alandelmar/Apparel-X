    // Adds the price of selected item to shopping cart total at top of page
    function addPrice(value) {
       // Shopping cart total at the top of the page
        counter = counter + value;
        // Concatenating the result and outputting
        shoppingCartItems.innerHTML = "€" + counter + ".00";
        // alert
        window.alert("Item successfully added to cart");
    }