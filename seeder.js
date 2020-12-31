 var seeder = require('mongoose-seed');

 // Connect to MongoDB via Mongoose
 seeder.connect('mongodb+srv://lego_user:L2At1JngbBUu8Vs6@lego.zv7kt.mongodb.net/Lego?retryWrites=true&w=majority', function () {

   // Load Mongoose models
   seeder.loadModels([
     'models/Themes.js',
     'models/Product.js',
     'models/Category.js',
     'models/Countries.js',
     'models/Interest.js',
     'models/Continent.js'
   ])

   // Clear specified collections
   seeder.clearModels(['themes', 'products', 'categories', 'countries', 'interest', 'continents'], function () {

     // Callback to populate DB once collections have been cleared
     seeder.populateModels(data, function () {
       seeder.disconnect();
     });

   });
 });

 // Data array containing seed data - documents organized by Model
 var data = [{
     'model': 'themes',
     'documents': [{
         "name": "Architecture",
         "visibleId": "architecture",
         "_id":"5fe64b7023ef326bd5ca8201"
       },
       {
         "name": "Batman",
         "visibleId": "batman",
         "_id":"5fe64b92438ee9d3e643db6a"

       },
       {
         "name": "Boost",
         "visibleId": "boost",
         "_id":"5fe64ba515f53c030533c136"
       },
       {
         "name": "City",
         "visibleId": "city",
         "_id":"5feaf37b58b666d095b6b018"
       },
       {
         "name": "Classic",
         "visibleId": "classic",
         "_id":"5feaf3ea8e343a7e585d069b"
       },
       {
         "name": "DC",
         "visibleId": "dc",
         "_id":"5feaf44a58b1622d2d93b94c"
       },
       {
         "name": "Creator",
         "visibleId": "creator"
       },
       {
         "name": "DOTS",
         "visibleId": "dots"
       },
       {
         "name": "Disney",
         "visibleId": "disney"
       }
     ]
   },
   {
     'model': 'products',
     'documents': [{
         "title": "Batman toy",
         "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
         "trending": true,
         "numberOfProduct": 2345,
         "avaliable": true,
         "vipPoints": 84,
         "pieces": 3,
         "age": 10,
         "images": ["40367.jpeg", "40367.jpeg", "40367.jpeg"],
         "theme":"5fe64ba515f53c030533c136",
         "interest":"5fe880a0fb31066bbb5d23cd",
         "price":200,
         "rating":4,
         "spotlight":true

       },
       {
         "title": "Superman toy",
         "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
         "theme":"5fe64ba515f53c030533c136",
         "interest":"5fe880c8209122442568d425",
         "trending": false,
         "spotlight":false,
         "numberOfProduct": 2345,
         "avaliable": true,
         "vipPoints": 84,
         "pieces": 3,
         "age": 10,
         "images": ["superman.jpeg", "specificationImg4.jpeg", "specificationImg4.jpeg"],
         "price":300,
         "rating":5,
       },
       {
         "title": "Flash toy",
         "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
         "theme":"5fe64ba515f53c030533c136",
         "interest":"5fe8814205c5a19faf7daa9e",
         "trending": false,
         "spotlight":false,
         "numberOfProduct": 2345,
         "avaliable": true,
         "vipPoints": 84,
         "pieces": 3,
         "age": 10,
         "images": ["specificationImg1.jpeg", "40367.jpeg", "40367.jpeg","40367.jpeg"],
         "price":300,
         "rating":5,

       },
       {
         "title": "Hulk toy",
         "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
         "trending": true,
         "theme":"5fe64b92438ee9d3e643db6a",
         "interest":"5fe880c8209122442568d425",
         "spotlight":false,
         "numberOfProduct": 2345,
         "avaliable": true,
         "vipPoints": 84,
         "pieces": 3,
         "age": 10,
         "images": ["specificationImg3.jpeg", "40367.jpeg", "40367.jpeg","40367.jpeg"],
         "price":300,
         "rating":2
       },
       {
         "title": "Captin America toy",
         "image": "75257.jpg",
         "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
         "theme":"5fe64b92438ee9d3e643db6a",
         "interest":"5fe8814205c5a19faf7daa9e",
         "trending":true,
         "spotlight":false,
         "numberOfProduct": 2345,
         "avaliable": true,
         "vipPoints": 84,
         "pieces": 3,
         "age": 10,
         "images": ["specificationImg3.jpeg", "40367.jpeg", "40367.jpeg","40367.jpeg"],
         "price":300,
         "rating":3
        },
       {
         "title": "Batman toy",
         "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
         "image": "eman.jpeg",
         "trending": true,
         "theme":"5fe64b92438ee9d3e643db6a",
         "interest":"5fe8811a1eacf55b0f2f60db",
         "spotlight":false,
         "numberOfProduct": 2345,
         "avaliable": true,
         "vipPoints": 84,
         "pieces": 3,
         "age": 10,
         "images": ["vichel.jpeg", "myBag.png","myBag.png"],
         "price":400,
         "rating":2

       },
       {
        "title": "Ninga toy",
        "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
        "trending": true,
        "numberOfProduct": 2345,
        "avaliable": true,
        "vipPoints": 84,
        "pieces": 3,
        "age": 10,
        "images": ["40367.jpeg", "40367.jpeg", "40367.jpeg"],
        "theme":"5fe64ba515f53c030533c136",
        "interest":"5fe8811a1eacf55b0f2f60db",
        "price":600,
        "rating":4,
        "spotlight":true

      },
      {
        "title": "City toy",
        "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
        "trending": true,
        "numberOfProduct": 2345,
        "avaliable": true,
        "vipPoints": 84,
        "pieces": 3,
        "age": 10,
        "images": ["40367.jpeg", "40367.jpeg", "40367.jpeg"],
        "theme":"5fe64b7023ef326bd5ca8201",
        "interest":"5fe8811a1eacf55b0f2f60db",
        "price":700,
        "rating":4,
        "spotlight":true

      },
      {
        "title": "Batman toy",
        "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
        "image": "eman.jpeg",
        "trending": true,
        "theme":"5feaf37b58b666d095b6b018",
        "interest":"5fe8811a1eacf55b0f2f60db",
        "spotlight":false,
        "numberOfProduct": 2345,
        "avaliable": true,
        "vipPoints": 84,
        "pieces": 3,
        "age": 11,
        "images": ["vichel.jpeg", "myBag.png","myBag.png"],
        "price":700,
        "rating":3

      },
      {
        "title": "City toy",
        "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
        "trending": true,
        "numberOfProduct": 2345,
        "avaliable": true,
        "vipPoints": 84,
        "pieces": 3,
        "age": 10,
        "images": ["40367.jpeg", "40367.jpeg", "40367.jpeg"],
        "theme":"5feaf3ea8e343a7e585d069b",
        "interest":"5fe8811a1eacf55b0f2f60db",
        "price":700,
        "rating":4,
        "spotlight":true
      },
      {
        "title": "Captin America toy",
        "image": "75257.jpg",
        "subTitle": "LEGO® City is a realistic LEGO world for your child to explore and stimulate their creativity.",
        "theme":"5feaf44a58b1622d2d93b94c",
        "interest":"5fe8814205c5a19faf7daa9e",
        "trending":true,
        "spotlight":false,
        "numberOfProduct": 2345,
        "avaliable": true,
        "vipPoints": 84,
        "pieces": 3,
        "age": 10,
        "images": ["specificationImg3.jpeg", "40367.jpeg", "40367.jpeg","40367.jpeg"],
        "price":300,
        "rating":3
       }
     ]
   },
   {
     'model': 'categories',
     'documents': [{
         "title": "Age",
         "visibleId": "age",
         "displayForShopByFilter": true,
         "subCategories": [{
             "title": "1-2",
             "visibleId": "age-1-2",
             "imgSrc": "eman.jpeg"
           },
           {
             "title": "3-5",
             "visibleId": "age-3-5",
             "imgSrc":"specificationImg3.jpeg"
           },
           {
             "title": "6-8",
             "visibleId": "age-6-8",
             "imgSrc":"vichel.jpeg"
           }
         ]
       },
       {
         "title": "Price",
         "visibleId": "price",
         "displayForShopByFilter": true,
         "subCategories": [{
             "title": "Under 25$",
             "visibleId": "price-under-25$",
             "imgSrc":"specificationImg3.jpeg"
           },
           {
             "title": "25$ - 50$",
             "visibleId": "price-25$-50$",
             "imgSrc":"vichel.jpeg"

           },
           {
             "title": "50$ - 75$",
             "visibleId": "price-20$-75$",
             "imgSrc":"specificationImg3.jpeg"

           }
         ]
       },
       {
         "title": "Product Type",
         "visibleId": "product-type",
         "displayForShopByFilter": true,
         "subCategories": [{
             "title": "Accessories",
             "visibleId": "accessories",
             "imgSrc":"specificationImg3.jpeg"
           },
           {
             "title": "Gift Cards",
             "visibleId": "gift-cards",
             "imgSrc": "eman.jpeg"

           },
           {
             "title": "Books",
             "visibleId": "books",
             "imgSrc":"specificationImg3.jpeg"
           }
         ]
       }

     ]
   },
   {
     'model': 'countries',
     'documents': [{
         "name": "Egypt"
       },
       {
         "name": "UAE"
       },
       {
         "name": "USA"
       },
       {
         "name": "Brazil"
       },
       {
         "name": "Germany"
       }
     ]
   },
   {
     'model': 'interest',
     'documents': [{
         "title": "Animal",
         "visibleId": "animal",
         "_id":"5fe880a0fb31066bbb5d23cd"

       },
       {
         "title": "Cars",
         "visibleId": "cars",
         "_id":"5fe880c8209122442568d425"

       },
       {
         "title": "Fantasy",
         "visibleId": "fantasy",
         "_id":"5fe8811a1eacf55b0f2f60db"

       },
       {
         "title": "Gaming",
         "visibleId": "gaming",
         "_id":"5fe8812d38a851b27db78483"

       },
       {
         "title": "Ninga",
         "visibleId": "ninga",
         "_id":"5fe8814205c5a19faf7daa9e"

       }
     ]
   },
   {
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
       },
       {
         'title': 'Africa',
         'branches': [{
           'title': "Egypt",
           'code': 'Eg'
         }, {
           'title': "Morocoo",
           'code': 'Mo'
         }]
       }
     ]
   }
 ];