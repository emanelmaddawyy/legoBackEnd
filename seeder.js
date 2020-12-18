 
var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb+srv://lego_user:L2At1JngbBUu8Vs6@lego.zv7kt.mongodb.net/Lego?retryWrites=true&w=majority', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/Themes.js'
  ])
 
  // Clear specified collections
  seeder.clearModels(['themes'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'themes',
        'documents': [
          {"name": "Architecture"},
          {"name": "Batman"},
          {"name": "Boost"},
          {"name": "City"},
          {"name": "Classic"},
          {"name": "DC"},
          {"name": "Creator"},
          {"name": "DOTS"},
          {"name": "Disney"},
          {"name": "Architecture"},
          {"name": "Batman"},
          {"name": "Boost"},
          {"name": "City"},
          {"name": "Classic"},
          {"name": "DC"},
          {"name": "Creator"},
          {"name": "DOTS"},
          {"name": "Disney"},
          {"name": "Architecture"},
          {"name": "Batman"},
          {"name": "Boost"},
          {"name": "City"},
          {"name": "Classic"},
          {"name": "DC"},
          {"name": "Creator"},
          {"name": "DOTS"},
          {"name": "Disney"}
        ]
    }
];