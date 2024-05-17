document.addEventListener("DOMContentLoaded", function () {
    // Function to update product details based on the product ID
    function updateProductDetails(productId) {
      // Up date product details based on the product ID
      const productImage = document.getElementById("product-image");
      const productName = document.getElementById("product-name");
      const productPrice = document.getElementById("product-price");
      const productDescription = document.getElementById("product-description");
  
      // Update the product details based on the product ID
      switch (productId) {
        case "mouse 5":
          productImage.src = "mouse 5.jpg";
          productName.textContent = "Logitech G Pro X SuperLight White";
          productPrice.textContent = " $ 95.50"; 
          productDescription.textContent = "Being so lightweight, the Pro X Superlight makes full use of the sensor's capabilities, allowing you to abandon heavy, full-hand movements for lighter, more precise ones. It can at times feel like you're not moving much at all, but surprisingly you're still actually having a big impact in your game.";
          break;
  
        case "keyboard 3":
          productImage.src = "keyboard 3.jpg";
          productName.textContent = "Basaltech Pink Keyboard with 7-Color LED Backlit, 104 Keys Quiet Silent Light Up Keyboard";
          productPrice.textContent = "$ 67.60";
          productDescription.textContent = "The membrane keyboard comes with mechanical brown switch feeling keys for ultimate gaming performance. Offering the best tactile typing experience, kawaii keyboard appearance, also being ever so slightly quieter, fitting for office or gaming use. Standard 104-key aesthetic keyboard layout, we keep the keyboard as it is, without adding any elements, focus on providing you with the best experience of use.";
          break;
  
        case "mouse 4":
          productImage.src = "mouse 4.jpg";
          productName.textContent = "Razer DeathAdder V2 Gaming Mouse";
          productPrice.textContent = "$ 89.00";
          productDescription.textContent = "The Razer DeathAdder V2 and the HyperX Pulsefire Haste are both amazing gaming mice. The Razer is a good choice for people who want lower click latency and a wider and more precise CPI range. It also has three times the amount of programmable inputs than the HyperX but is slightly bigger and heavier.";
          break;
  
        case "laptop 1":
          productImage.src = "laptop 1.jpg";
          productName.textContent = "ASUS - ROG Zephyrus G14 14 Gaming Laptop - AMD Ryzen 7 - 16GB Memory - NVIDIA GeForce GTX 1660 Ti - 512GB SSD - Eclipse Gray";
          productPrice.textContent = "$ 1000.90";
          productDescription.textContent = "The Zephyrus is powered by AMD's Ryzen R9 8945HS, a powerful processor, paired with the RTX 4060 laptop graphics card—it tackles most games with ease and can even run some of the heaviest AAA titles reasonably well.";
          break;
  
        case "Headset4":
          productImage.src = "Headset4.jpg";  
          productName.textContent = "Logitech G733 Lightspeed Wireless RGB Gaming Headset";
          productPrice.textContent = "$ 50.90";
          productDescription.textContent = "Meet G733, a gaming headset designed to suit your style. Embrace total wireless with 2.4 GHZ LIGHTSPEED wireless, featuring up to 20 m of range and up to 29 hours of battery life. Customize how you look and sound in G HUB with dual-zone, front-facing LIGHTSYNC RGB and Blue VO! CE real-time voice filters.";
          break;
        
        case "mic4":
          productImage.src = "mic4.jpg";
          productName.textContent = "FIFINE Boom Arm Mic Stand, Low Profile Microphone Arm Stand";
          productPrice.textContent = "$ 80.40";
          productDescription.textContent = "A tripod boom stand has the same bottom half as a standard tripod stand, but there's an added pole attached at the top of the vertical pole, known as the boom arm. The boom arm is what makes a tripod boom stand flexible and often more comfortable to use since you have more freedom to angle the mic.";
          break;
  
        case "gaming keyboard 1":
          productImage.src = "gaming keyboard 1.jpg";
          productName.textContent = "ROYAL KLUDGE RK87 80 Percent Wireless TKL Mechanical Gaming Keyboard";
          productPrice.textContent = "$ 90.50";
          productDescription.textContent = "The RK Royal Kludge RK61 Wired 60% Mechanical Gaming Keyboard is an excellent choice for anyone who needs a high-quality keyboard for gaming or work. One of the standout features of this keyboard is its compact size.";
          break;
  
        case "Mousepad":
          productImage.src = "Mousepad.jpg";
          productName.textContent = "Ovenbird Large Gaming Mouse Pad with Stitched Edges";
          productPrice.textContent = "$ 60.50";
          productDescription.textContent = "This aesthetic and durable white mouse pad with our unique design is a decent gift for you and your loved ones; ideal for gamers; graphic designers, or anyone who uses a mouse for long sessions.";
          break;
  
        case "mouase 3":
          productImage.src = "mouse 3.jpg";
          productName.textContent = "Logitech G502 Lightspeed Wireless Optical Gaming Mouse";
          productPrice.textContent = "$ 96.90";
          productDescription.textContent = "G502 HERO features HERO 25K gaming sensor with sub-micron precision tracking, customizable LIGHTSYNC RGB, onboard profiles, repositionable weights and more. FREE Keyboard Sleeve with G Series Mouse and Keyboard Purchase.";
          break;
  
        case "mouse 6":
          productImage.src = "mouse 6.jpg";
          productName.textContent = "Mouse-Gaming-Trust-GXT-111-Neebo";
          productPrice.textContent = "$ 78.56";
          productDescription.textContent = "Trust GXT 111 Neebo Mouse at the lowest price! Our online shop for electronics and computers, techinn makes your dreams come true! Find Devices at unbeatable prices. Have a look on our detailed description with characteristics and reviews of other customers who already bought the Trust GXT 111 Neebo Mouse.";
          break;
  
        case "Keyboard 4":
          productImage.src = "Keyboard 4.jpg";
          productName.textContent = "127 Keys Cherry Blossom Keycap Set OEM Profile";
          productPrice.textContent = "$ 40.90";
          productDescription.textContent = "They are slightly shorter than OEM keycaps, but usually more expensive unless you are buying from a company that uses genuine tooling. They produce a bassy sound due to the lack of room within the keycap for sound to bounce around. Cherry profile keycaps are excellent for both gaming and typing.";
          break;
  
        case "monitor2":
          productImage.src = "monitor2.jpg";
          productName.textContent = "Dell Curved Gaming Monitor 27 Inch Curved Monitor ";
          productPrice.textContent = "$ 90.25";
          productDescription.textContent = "As an innovator in monitor technology, Dell offers curved monitors that are at the forefront of gaming technology. With screen sizes up to 34 inches and furiously fast refresh rates, curved gaming monitors from Dell improve the odds and heighten the viewing experience for every game and every battle.";
          break;
  
        case "Headset3":
          productImage.src = "Headset3.jpg";
          productName.textContent = "Razer Nari Ultimate Wireless Gaming Headset";
          productPrice.textContent = "$ 68.90";
          productDescription.textContent = "The Razer Nari Ultimate Wireless are decent wireless gaming over-ears. They have Razer HyperSense built-in, which is a haptic feedback system that transmits vibrations or rumbles to the user that can help immerse you in your games. They're also comfortable and well-built.";
          break;
  
        case "mic3":
          productImage.src = "mic3.jpg";
          productName.textContent = "HyperX QuadCast S RGB Multi-Pattern USB Condenser Microphone, Black";
          productPrice.textContent = "$ 48.90";
          productDescription.textContent = "The HyperX QuadCast™ S is a USB condenser microphone that both sounds great and looks great. The supremely stunning RGB lighting and dynamic effects will add style and flair to any stream or setup and is customizable via HyperX NGENUITY software. The QuadCast S is an all-inclusive mic, featuring an anti-vibration shock mount to help quiet the rumbles of daily life and a built-in pop filter to muffle plosive sounds";
          break;
  
        case "keyboard5":
          productImage.src = "keyboard5.jpg";
          productName.textContent = "Royal Kludge RK61 Teclado mecánico bluetooth";
          productPrice.textContent = "$ 59.80";
          productDescription.textContent = "60% Mechanical Gaming Keyboard - The Compact mechanical keyboard with 61 Keys brings you a neat desktop. Tips you might want to know is that 60% gaming keyboard without numpad is most FPS gamers’ choice, more spaces left for mouse movements.";
          break;
        
        case "monitor3":
          productImage.src ="monitor3.jpg";
          productName.textContent = "Predator Gaming | It Lies Within | Predator | Acer United States";
          productPrice.textContent = "$ 70.68 ";
          productDescription.textContent = "Acer Predator Helios 300 (2021) is a Windows 10 Home laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. it comes with 16GB of RAM. The Acer Predator Helios 300 (2021) packs 1TB of HDD storage and 256GB of SSD storage. Graphics are powered by Nvidia GeForce RTX 3060.";
          break;
          
        default:
          // Handle unknown product IDs
          break;
      }
  
      const addToCartButton = document.getElementById("add-to-cart-button");
      addToCartButton.addEventListener("click", addToCart);
    }
  
    // Function to handle adding a product to the cart
    function addToCart() {
      // Get the product details from the page
      const productId = getQueryParam("product");
      const productName = document.getElementById("product-name").textContent;
      const productPriceString = document.getElementById("product-price").textContent;
      const quantity = document.getElementById('quantity-input').value;
      const productImageSrc = document.getElementById("product-image").src;
  
      // Parse the product price as a float
      const productPrice = parseFloat(productPriceString.replace("$", ""));
  
      // Create a new cart item object
      const cartItem = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: parseInt(quantity),
        imageSrc: productImageSrc,
      };
  
      // Check if the cart array already exists in local storage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Check if the product is already in the cart
      const existingProductIndex = cart.findIndex(
        (item) => item.id === productId
      );
  
      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increment the quantity
        cart[existingProductIndex].quantity++;
      } else {
        // If the product is not in the cart, add it
        cart.push(cartItem);
      }
  
      // Update the local storage with the modified cart
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Optionally, you can redirect the user to the cart page or show a confirmation message
      alert("Product added to cart!");
    }
  
    // Function to handle product clicks
    function handleProductClick(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
  
      // Get the product ID from the data attribute of the clicked element
      const productId = event.target.dataset.productId;
  
      // Update the URL with the selected product ID
      history.pushState({}, null, `product-details.html?product=${productId}`);
  
      // Update the product details on the page
      updateProductDetails(productId);
    } 
  
    // Attach click event listeners to each product item
    const productItems = document.querySelectorAll(".col-4 img");
    productItems.forEach((item) => {
      item.addEventListener("click", handleProductClick);
    });
  
    // Call the function to update product details based on the current URL
    const currentProductId = new URLSearchParams(window.location.search).get(
      "product"
    );
    if (currentProductId) {
      updateProductDetails(currentProductId);
    }
  });
  
  // Function to get query parameters from the URL
  function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }