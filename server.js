const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

//import routes
const postRoutes = require('./routes/posts');

//App middleware
app.use(bodyParser.json());
app.use(cors());

//Route Middleware
app.use(postRoutes);

const PORT = 8000;

const DB_URL = 'mongodb+srv://ramesh:mangotree1999@crud.izru9jn.mongodb.net/MONGO_DB?retryWrites=true&w=majority'


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>{
    console.log('Database Connection Successful...!');
})
.catch((err)=>console.log('Database Connection Unsuccessful',err));


app.listen(PORT, ()=>{
    console.log(`***  APP IS RUNNING ON THE SERVER | PORT NO :- ${PORT}  ***`)
});
