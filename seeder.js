 var seeder = require('mongoose-seed');

 // Connect to MongoDB via Mongoose
 seeder.connect('mongodb+srv://lego_user:L2At1JngbBUu8Vs6@lego.zv7kt.mongodb.net/Lego?retryWrites=true&w=majority', function () {

   // Load Mongoose models
   seeder.loadModels([
     'models/Themes.js',
     'models/Product.js',
     'models/Category.js'
   ])

   // Clear specified collections
   seeder.clearModels(['themes', 'products', 'categories'], function () {

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
         "visibleId": "architecture"
       },
       {
         "name": "Batman",
         "visibleId": "batman"
       },
       {
         "name": "Boost",
         "visibleId": "boost"
       },
       {
         "name": "City",
         "visibleId": "city"
       },
       {
         "name": "Classic",
         "visibleId": "classic"
       },
       {
         "name": "DC",
         "visibleId": "dc"
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
         "image": ""
       },
       {
         "title": "Superman toy",
         "image": ""
       },
       {
         "title": "Flash toy",
         "image": ""
       },
       {
         "title": "Hulk toy",
         "image": ""
       },
       {
         "title": "Captin America toy",
         "image": ""
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
             "visibleId": "age-1-2"
           },
           {
             "title": "3-5",
             "visibleId": "age-3-5"
           },
           {
             "title": "6-8",
             "visibleId": "age-age"
           }
         ]
       },
       {
         "title": "Price",
         "visibleId": "price",
         "displayForShopByFilter": true,
         "subCategories": [{
             "title": "Under 25$",
             "visibleId": "price-under-25$"
           },
           {
             "title": "25$ - 50$",
             "visibleId": "price-25$-50$"
           },
           {
             "title": "50$ - 75$",
             "visibleId": "price-20$-75$"
           }
         ]
       },
       {
         "title": "Product Type",
         "visibleId": "product-type",
         "displayForShopByFilter": true,
         "subCategories": [{
             "title": "Accessories",
             "visibleId": "accessories"
           },
           {
             "title": "Gift Cards",
             "visibleId": "gift-cards"
           },
           {
             "title": "Storage",
             "visibleId": "storage"
           },
           {
             "title": "Books",
             "visibleId": "books"
           }
         ]
       }
     ]
   }
 ];