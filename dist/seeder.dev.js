"use strict";

var seeder = require('mongoose-seed'); // Connect to MongoDB via Mongoose


seeder.connect('mongodb+srv://lego_user:L2At1JngbBUu8Vs6@lego.zv7kt.mongodb.net/Lego?retryWrites=true&w=majority', function () {
  // seeder.connect('mongodb://localhost:27017/Lego', function () {
  // Load Mongoose models
  seeder.loadModels(['models/Themes.js', 'models/Product.js', 'models/Category.js', 'models/Countries.js', 'models/Interest.js', 'models/Continent.js', 'models/ProductType.js', 'models/Price.js', 'models/Age.js', 'models/Order.js']); // Clear specified collections

  seeder.clearModels(['themes', 'products', 'categories', 'countries', 'interest', 'continents', 'productTypes', 'prices', 'ages', 'orders'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
}); // Data array containing seed data - documents organized by Model

var data = [{
  'model': 'themes',
  'documents': [{
    "title": "Architecture",
    "visibleId": "architecture",
    "_id": "5fe64b7023ef326bd5ca8201"
  }, {
    "title": "Batman",
    "visibleId": "batman",
    "_id": "5fe64b92438ee9d3e643db6a"
  }, {
    "title": "Boost",
    "visibleId": "boost",
    "_id": "5fe64ba515f53c030533c136"
  }, {
    "title": "City",
    "visibleId": "city",
    "_id": "5feaf37b58b666d095b6b018"
  }, {
    "title": "Classic",
    "visibleId": "classic",
    "_id": "5feaf3ea8e343a7e585d069b"
  }, {
    "title": "DC",
    "visibleId": "dc",
    "_id": "5feaf44a58b1622d2d93b94c"
  }]
}, {
  'model': 'products',
  'documents': [{
    "title": "Droid ",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "trending": true,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 5,
    "images": ["q4.jpeg", "q3.jpeg", "q2.jpeg"],
    "theme": "5fe64ba515f53c030533c136",
    "interest": "5fe880a0fb31066bbb5d23cd",
    "price": 55,
    "rating": 4,
    "spotlight": true,
    "productType": "5ff1f3277f3bb188c7d562de",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3795c8dd0ad9f606f04"
  }, {
    "title": "Droid Commander ",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "theme": "5fe64ba515f53c030533c136",
    "interest": "5fe880c8209122442568d425",
    "trending": false,
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 1,
    "images": ["q1.jpeg", "q2.jpeg", "q3.jpeg"],
    "price": 40,
    "rating": 5,
    "productType": "5ff1f3454857524f1b59f5ea",
    "priceCategory": "5ff1f3607490b9f5d5445e76",
    "ageCategory": "5ff1f371921adcd711f05264"
  }, {
    "title": "Flash toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "theme": "5fe64ba515f53c030533c136",
    "interest": "5fe8814205c5a19faf7daa9e",
    "trending": false,
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 2,
    "images": ["b2.jpeg", "b4.jpeg", "b1.jpeg"],
    "price": 55,
    "rating": 5,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f371921adcd711f05264"
  }, {
    "title": "Batman toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "trending": true,
    "theme": "5fe64b92438ee9d3e643db6a",
    "interest": "5fe880c8209122442568d425",
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 3,
    "images": ["bat1.jpeg", "bat2.jpeg", "bat3.jpeg", "bat4.jpeg"],
    "price": 20,
    "rating": 2,
    "productType": "5ff1f3277f3bb188c7d562de",
    "priceCategory": "5ff1f3573d82f5a13887a291",
    "ageCategory": "5ff1f3795c8dd0ad9f606f04"
  }, {
    "title": "German face",
    "image": "75257.jpg",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "theme": "5fe64b92438ee9d3e643db6a",
    "interest": "5fe8812d38a851b27db78483",
    "trending": true,
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 6,
    "images": ["z1.jpeg", "z2.jpeg", "z3.jpeg", "z4.jpeg"],
    "price": 30,
    "rating": 3,
    "productType": "5ff1f3454857524f1b59f5ea",
    "priceCategory": "5ff1f3607490b9f5d5445e76",
    "ageCategory": "5ff1f3816fd9b19087b07410"
  }, {
    "title": "Batman Face",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "image": "eman.jpeg",
    "trending": true,
    "theme": "5fe64b92438ee9d3e643db6a",
    "interest": "5fe8812d38a851b27db78483",
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 1,
    "images": ["f1.jpeg", "f2.jpeg", "f3.jpeg", "f4.jpeg"],
    "price": 15,
    "rating": 2,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f3573d82f5a13887a291",
    "ageCategory": "5ff1f371921adcd711f05264"
  }, {
    "title": "Creative toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "trending": true,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 4,
    "images": ["b1.jpeg", "b3.jpeg", "b4.jpeg"],
    "theme": "5fe64ba515f53c030533c136",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "price": 60,
    "rating": 4,
    "spotlight": true,
    "productType": "5ff1f3277f3bb188c7d562de",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3795c8dd0ad9f606f04"
  }, {
    "title": "ًwhite toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "trending": true,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 7,
    "images": ["i4.png", "i2.png", "i3.png"],
    "theme": "5fe64b7023ef326bd5ca8201",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "price": 50,
    "rating": 4,
    "spotlight": true,
    "productType": "5ff1f3454857524f1b59f5ea",
    "priceCategory": "5ff1f3607490b9f5d5445e76",
    "ageCategory": "5ff1f371921adcd711f05264"
  }, {
    "title": "shopping street",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "image": "eman.jpeg",
    "trending": true,
    "theme": "5feaf37b58b666d095b6b018",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 7,
    "images": ["c1.png", "c2.png", "c3.png"],
    "price": 70,
    "rating": 3,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3816fd9b19087b07410"
  }, {
    "title": "city toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "image": "eman.jpeg",
    "trending": true,
    "theme": "5feaf37b58b666d095b6b018",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 7,
    "images": ["c3.png", "c4.jpeg", "c2.png"],
    "price": 70,
    "rating": 3,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3816fd9b19087b07410"
  }, {
    "title": "city toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "image": "eman.jpeg",
    "trending": true,
    "theme": "5feaf37b58b666d095b6b018",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 7,
    "images": ["i1.jpeg", "c2.png", "c3,png"],
    "price": 70,
    "rating": 3,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3816fd9b19087b07410"
  }, {
    "title": "city toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "image": "eman.jpeg",
    "trending": true,
    "theme": "5feaf37b58b666d095b6b018",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 7,
    "images": ["c4.jpeg", "c2.png", "c3.png"],
    "price": 70,
    "rating": 3,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3816fd9b19087b07410"
  }, {
    "title": "Cars",
    "image": "75257.jpg",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "theme": "5feaf44a58b1622d2d93b94c",
    "interest": "5fe880c8209122442568d425",
    "trending": true,
    "spotlight": false,
    "numberOfProduct": 2345,
    "avaliable": true,
    "vipPoints": 84,
    "pieces": 3,
    "age": 4,
    "images": ["car1.webp", "car2.webp"],
    "price": 65,
    "rating": 3,
    "productType": "5ff1f3277f3bb188c7d562de",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3795c8dd0ad9f606f04"
  }, {
    "title": "Arch toy",
    "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
    "trending": true,
    "theme": "5fe64b7023ef326bd5ca8201",
    "interest": "5fe8811a1eacf55b0f2f60db",
    "spotlight": false,
    "numberOfProduct": 2344,
    "avaliable": true,
    "vipPoints": 80,
    "pieces": 3,
    "age": 4,
    "images": ["i3.png", "i4.png", "i2.png"],
    "price": 70,
    "rating": 3,
    "productType": "5ff1f34e7f4f0166338b5b66",
    "priceCategory": "5ff1f36993386b9a6ba63e36",
    "ageCategory": "5ff1f3816fd9b19087b07410"
  }]
}, {
  'model': 'countries',
  'documents': [{
    "name": "Egypt"
  }, {
    "name": "UAE"
  }, {
    "name": "USA"
  }, {
    "name": "Brazil"
  }, {
    "name": "Germany"
  }]
}, {
  'model': 'interest',
  'documents': [{
    "title": "Animal",
    "visibleId": "animal",
    "_id": "5fe880a0fb31066bbb5d23cd"
  }, {
    "title": "Cars",
    "visibleId": "cars",
    "_id": "5fe880c8209122442568d425"
  }, {
    "title": "Fantasy",
    "visibleId": "fantasy",
    "_id": "5fe8811a1eacf55b0f2f60db"
  }, {
    "title": "Gaming",
    "visibleId": "gaming",
    "_id": "5fe8812d38a851b27db78483"
  }, {
    "title": "Ninga",
    "visibleId": "ninga",
    "_id": "5fe8814205c5a19faf7daa9e"
  }]
}, {
  'model': 'continents',
  'documents': [{
    'title': 'North America',
    'branches': [{
      'title': "Canda",
      'code': 'Ca'
    }, {
      'title': "Mexico",
      'code': 'Mx'
    }]
  }, {
    'title': 'Africa',
    'branches': [{
      'title': "Egypt",
      'code': 'Eg'
    }, {
      'title': "Morocoo",
      'code': 'Mo'
    }]
  }]
}, {
  'model': 'productTypes',
  'documents': [{
    "_id": "5ff1f3277f3bb188c7d562de",
    "title": "Accessories",
    "image": "acc.webp"
  }, {
    "_id": "5ff1f3454857524f1b59f5ea",
    "title": "Gift Cards",
    "image": "mybag.png"
  }, {
    "_id": "5ff1f34e7f4f0166338b5b66",
    "title": "Books",
    "image": "book.webp"
  }]
}, {
  'model': 'prices',
  'documents': [{
    "_id": "5ff1f3573d82f5a13887a291",
    "title": "Under 25$",
    "image": "trending1.jpeg"
  }, {
    "_id": "5ff1f3607490b9f5d5445e76",
    "title": "25$ - 50$",
    "image": "trending2.jpeg"
  }, {
    "_id": "5ff1f36993386b9a6ba63e36",
    "title": "50$ - 75$",
    "image": "trending3.jpeg"
  }]
}, {
  'model': 'ages',
  'documents': [{
    "_id": "5ff1f371921adcd711f05264",
    "title": "1-2",
    "image": "age1.webp"
  }, {
    "_id": "5ff1f3795c8dd0ad9f606f04",
    "title": "3-5",
    "image": "age2.webp"
  }, {
    "_id": "5ff1f3816fd9b19087b07410",
    "title": "6-8",
    "image": "age3.webp"
  }]
}];