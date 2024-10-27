
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
//midleware 
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD}@cluster0.b18k8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const coffeecalection = client.db('CoffeeDB').collection('coffee');
    
    app.get('/coffee',async(req,res)=>{
      const cursor = coffeecalection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/coffee/:id',async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeecalection.findOne(query);
      res.send(result);
    })

    app.post('/coffee', async(req,res)=>{
        const newcoffee =req.body;
        const result = await coffeecalection.insertOne(newcoffee);
        res.send(result);
    })

    app.put('/coffee/:id',async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert : true};
      const updateCoffee= req.body;
      console.log(updateCoffee);
      const Coffee ={
        $set : {
          name :updateCoffee.name,quantity:updateCoffee.quantity,supplier:updateCoffee.supplier,taste:updateCoffee.taste,Category:updateCoffee.Category,Details:updateCoffee.Details,photo: updateCoffee.photo,
        }
      }
      const result = await coffeecalection.updateOne(filter,Coffee,options);
      res.send(result);
    })

    app.delete('/coffee/:id',async(req,res)=>{
      const id = req.params.id;
      const query ={_id :new ObjectId(id)};
      const result = await coffeecalection.deleteOne(query);
      res.send(result);
    })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(port);
