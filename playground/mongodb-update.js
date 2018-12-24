const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

// db.collection('Users').findOneAndUpdate({
//   _id: new ObjectID('5c1ee13fb4eac622723e4ad6')
// },{
//   $set:{
//     name:"Matthew",
//     age:41
//   }
// }, {
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  age:43
},{
  $inc:{eyes:1},
  $set:{legs:2}
  },{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});

  // db.close();
});
