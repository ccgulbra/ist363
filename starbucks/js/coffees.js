const coffees = [
    {
      "title": "Espresso",
      "price": 2.99,
      "description": "A strong and concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans.",
      "image": {
        "fileName": "espresso.jpg",
        "width": 400,
        "height": 300,
        "altText": "Espresso"
      }
    },
    {
      "title": "Cappuccino",
      "price": 3.49,
      "description": "A coffee drink that consists of a shot of espresso, hot milk, and steamed milk foam.",
      "image": {
        "fileName": "cappuccino.jpg",
        "width": 450,
        "height": 350,
        "altText": "Cappuccino"
      }
    },
    {
      "title": "Latte",
      "price": 3.79,
      "description": "A coffee drink made with espresso and steamed milk, topped with a small amount of milk foam.",
      "image": {
        "fileName": "latte.jpg",
        "width": 500,
        "height": 400,
        "altText": "Latte"
      }
    },
    {
      "title": "Mocha",
      "price": 4.29,
      "description": "A delicious blend of espresso, chocolate, and steamed milk, often topped with whipped cream.",
      "image": {
        "fileName": "mocha.jpg",
        "width": 480,
        "height": 360,
        "altText": "Mocha"
      }
    },
    {
      "title": "Americano",
      "price": 2.49,
      "description": "A coffee made by diluting a shot of espresso with hot water, resulting in a similar strength to regular drip coffee.",
      "image": {
        "fileName": "americano.jpg",
        "width": 420,
        "height": 320,
        "altText": "Americano"
      }
    },
    {
      "title": "Black Coffee",
      "price": 2.29,
      "description": "A classic coffee made from ground coffee beans and hot water, without added milk or sugar.",
      "image": {
        "fileName": "black_coffee.jpg",
        "width": 380,
        "height": 280,
        "altText": "Black Coffee"
      }
    },
    {
      "title": "Iced Coffee",
      "price": 3.99,
      "description": "Chilled coffee served over ice cubes, often sweetened and flavored according to preference.",
      "image": {
        "fileName": "iced_coffee.jpg",
        "width": 450,
        "height": 340,
        "altText": "Iced Coffee"
      }
    },
    {
      "title": "Turkish Coffee",
      "price": 4.99,
      "description": "A traditional method of brewing coffee using finely ground coffee beans and unfiltered preparation.",
      "image": {
        "fileName": "turkish_coffee.jpg",
        "width": 420,
        "height": 320,
        "altText": "Turkish Coffee"
      }
    },
    {
      "title": "Irish Coffee",
      "price": 5.49,
      "description": "A cocktail consisting of hot coffee, Irish whiskey, sugar, and topped with cream.",
      "image": {
        "fileName": "irish_coffee.jpg",
        "width": 480,
        "height": 360,
        "altText": "Irish Coffee"
      }
    },
    {
      "title": "Caramel Macchiato",
      "price": 4.49,
      "description": "A sweet and creamy coffee drink made with espresso, caramel syrup, steamed milk, and a drizzle of caramel sauce.",
      "image": {
        "fileName": "caramel_macchiato.jpg",
        "width": 450,
        "height": 350,
        "altText": "Caramel Macchiato"
      }
    },
    {
      "title": "Decaf Coffee",
      "price": 2.79,
      "description": "A caffeine-free version of regular coffee, perfect for those who want the taste without the jolt.",
      "image": {
        "fileName": "decaf_coffee.jpg",
        "width": 380,
        "height": 280,
        "altText": "Decaf Coffee"
      }
    },
    {
      "title": "Cold Brew",
      "price": 4.99,
      "description": "A refreshing coffee made by steeping coarsely ground coffee beans in cold water for an extended period.",
      "image": {
        "fileName": "cold_brew.jpg",
        "width": 420,
        "height": 320,
        "altText": "Cold Brew"
      }
    },
    {
      "title": "French Press Coffee",
      "price": 3.79,
      "description": "A rich and full-bodied coffee brewed using a French press, known for its strong flavor.",
      "image": {
        "fileName": "french_press_coffee.jpg",
        "width": 500,
        "height": 400,
        "altText": "French Press Coffee"
      }
    },
    {
      "title": "Hazelnut Coffee",
      "price": 4.49,
      "description": "Coffee flavored with the rich and nutty taste of hazelnuts, often enjoyed with cream or milk.",
      "image": {
        "fileName": "hazelnut_coffee.jpg",
        "width": 450,
        "height": 350,
        "altText": "Hazelnut Coffee"
      }
    },
    {
      "title": "Vanilla Latte",
      "price": 4.49,
      "description": "A delightful combination of espresso, steamed milk, and vanilla syrup, topped with frothy milk foam.",
      "image": {
        "fileName": "vanilla_latte.jpg",
        "width": 480,
        "height": 360,
        "altText": "Vanilla Latte"
      }
    },
    {
      "title": "Cinnamon Spice Coffee",
      "price": 3.99,
      "description": "Coffee infused with the warm and aromatic flavors of cinnamon and spices, perfect for a cozy day.",
      "image": {
        "fileName": "cinnamon_spice_coffee.jpg",
        "width": 420,
        "height": 320,
        "altText": "Cinnamon Spice Coffee"
      }
    },
    {
      "title": "Pumpkin Spice Latte",
      "price": 4.99,
      "description": "A seasonal favorite, featuring espresso, steamed milk, pumpkin spice syrup, and whipped cream.",
      "image": {
        "fileName": "pumpkin_spice_latte.jpg",
        "width": 420,
        "height": 320,
        "altText": "Pumpkin Spice Latte"
      }
    },
    {
      "title": "Dark Roast Coffee",
      "price": 2.79,
      "description": "A bold and robust coffee with a deep, smoky flavor, perfect for those who love strong coffee.",
      "image": {
        "fileName": "dark_roast_coffee.jpg",
        "width": 380,
        "height": 280,
        "altText": "Dark Roast Coffee"
      }
    },
    {
      "title": "White Chocolate Mocha",
      "price": 4.79,
      "description": "A luxurious coffee drink made with espresso, white chocolate syrup, steamed milk, and whipped cream.",
      "image": {
        "fileName": "white_chocolate_mocha.jpg",
        "width": 450,
        "height": 350,
        "altText": "White Chocolate Mocha"
      }
    }
  ];