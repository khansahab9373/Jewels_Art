const items = {
  "earrings": "/pages/earring.html",
  // "earrings": "./earring.html",

  "earrings": "/pages/earring.html",
  // "earring": "./earring.html",

  "ring": "/pages/rings.html",
  "rings": "/pages/rings.html",

  "necklace": "/pages/Necklace.html",
  "necklaces": "/pages/Necklace.html",
  "bracelet": "/pages/Bracelet.html",
  "bracelets": "/pages/Bracelet.html",
  "bangle": "/pages/Bangle.html",
  "bangles": "/pages/Bangle.html",
  "bridal": "/pages/Bridal.html",
  "bridals": "/pages/Bridal.html",
  "chain": "/pages/chain.html",
  "chains": "/pages/chain.html",
  "nosepin": "/pages/Nose_pin.html",
  "nosepins": "/pages/Nose_pin.html",
  "gift": "/pages/GIfts.html",
  "gifts": "/pages/GIfts.html",
  "arrival": "/pages/best_seller.html", 
  "arrivals": "/pages/best_seller.html",


  "giftcard": "/pages/giftcard.html",
  "giftcards": "/pages/giftcard.html",


  




};

function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value.toLowerCase();
  
  // Look for the query in the items object
  if (items[query]) {
    window.location.href = items[query];
  } else {
    alert("No results found for: " + query);
  }
}


  // Function to update prices dynamically based on quantity selection

  function updatePrices() {
    // Get the selected quantity
    const quantity = parseInt(document.getElementById("quantity").value, 10);
  
    // Retrieve base prices from initial DOM content
    const priceElement = document.getElementById("updatedPrice1");
    const discountPriceElement = document.getElementById("updatedPrice2");
  
    // Parse base prices from the initial content (without relying on data attributes)
    const basePrice = parseFloat(priceElement.getAttribute('data-original-price'));
    const baseDiscountedPrice = parseFloat(discountPriceElement.getAttribute('data-original-discount-price'));
  
    // Ensure base prices are valid numbers
    if (isNaN(basePrice) || isNaN(baseDiscountedPrice)) {
      console.error("Invalid base price or discounted price in the DOM.");
      return;
    }
  
   
    // Calculate updated prices
    const updatedPrice = basePrice * quantity;
    const updatedDiscountedPrice = baseDiscountedPrice * quantity;
  
    // Update the DOM with formatted prices
    priceElement.textContent = updatedPrice.toLocaleString("en-IN");
    discountPriceElement.innerHTML = `<del><i class='fa-solid fa-indian-rupee-sign'></i> ${updatedDiscountedPrice.toLocaleString("en-IN")}</del>`;
  }
  
  // Initialize prices with original values
  function initializePrices() {
    const priceElement = document.getElementById("updatedPrice1");
    const discountPriceElement = document.getElementById("updatedPrice2");
  
    const originalPrice = parseFloat(priceElement.textContent.replace(/,/g, ""));
    const originalDiscountPrice = parseFloat(discountPriceElement.textContent.replace(/,/g, "").replace(/[^\d]/g, ""));
  
    priceElement.setAttribute('data-original-price', originalPrice);
    discountPriceElement.setAttribute('data-original-discount-price', originalDiscountPrice);
  }
  
  // Add event listener to update prices when quantity changes
  document.getElementById("quantity").addEventListener("change", updatePrices);
  
  // Initialize base prices on page load
  initializePrices();

  