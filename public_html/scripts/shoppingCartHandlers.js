            // total value of items in cart
            var counter = 734;
            var priceOfDelivery;

            // Deducts the price of the item from the shopping cart total
            function deductItem(value, int) {
                // Updating the price
                counter = counter - value;
                window.alert("Item successfully removed from cart");
                // Fetching class element and using its array index to remove it from the screen
                var table = document.getElementsByClassName("productPanel");
                var theTable = table[int];
                theTable.style.display = "none";
                // Updated total
                var productsTotal = document.getElementById("productsTotal");
                productsTotal.innerHTML = counter;
                // Concatenating to produce price output
                var shoppingCartItems = document.getElementById("shoppingCartItems");
                shoppingCartItems.innerHTML = "€" + counter + ".00";

                var grandTotal = document.getElementById("grandTotal");
                grandTotal.innerHTML = counter;

            }


            function deliveryPriceFunction() {
                // Accessing the dropdown menu
                var deliveryPrice = document.getElementById("deliveryPrice");
                var keyWord = deliveryPrice.options[deliveryPrice.selectedIndex].text;

                if (keyWord === "standard (free)") {
                    priceOfDelivery = 0;
                } else if (keyWord === "next day - next day delivery (€15.00)") {
                    priceOfDelivery = 15;
                } else if (keyWord === "express - 5 working days (€8.00)") {
                    priceOfDelivery = 8;
                } else {
                    priceOfDelivery = 0;
                }
                // Outputting delivery charge
                var deliveryCharge = document.getElementById("deliveryCharge");
                deliveryCharge.innerHTML = priceOfDelivery;
                // Accessing grand total line
                var grandTotal = document.getElementById("grandTotal");
                // Turning the contents to an integer
                var grandTotalValue = parseInt(grandTotal.innerHTML);
                var totalWithDelivery = grandTotalValue + priceOfDelivery;
                grandTotal.innerHTML = totalWithDelivery;
            }
