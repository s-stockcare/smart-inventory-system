const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_FILE = 'products.json';

app.use(cors());
app.use(bodyParser.json());

// Create products.json if it doesn't exist
if(!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]');

// GET all products
app.get('/products', (req,res)=>{
    const products = JSON.parse(fs.readFileSync(DATA_FILE));
    res.json(products);
});

// POST new product
app.post('/products', (req,res)=>{
    const products = JSON.parse(fs.readFileSync(DATA_FILE));
    const newProduct = req.body;
    products.push(newProduct);
    fs.writeFileSync(DATA_FILE, JSON.stringify(products,null,2));
    res.json({message:'Product added', product:newProduct});
});

app.listen(PORT, ()=>console.log(`Backend running on port ${PORT}`));