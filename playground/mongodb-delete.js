const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').deleteMany({text: "walk dog"}).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text:"learn Mongo"}).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id:new ObjectID("5c1eef20c963e1dd5af0d8b7")}).then((result)=>{
  console.log(result);
});
  // db.close();

});
