const express =require('express');
const cors=require('cors');
const app= express();
const bodyParser=require('body-parser');
require('dotenv/config')
const mongoose=require('mongoose')
const roomget=require('./routes/roomget')
app.use(bodyParser.json())
app.use(cors());

app.use('/posts',roomget)

mongoose.connect(process.env.ATLAS_URI,{ useUnifiedTopology: true, useNewUrlParser: true,useNewUrlParser: true  },()=>console.log("Connected to DB"));

app.listen(5000);
