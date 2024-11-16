const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 }
]

router.get('/', (req,res)=>{
  res.send('hello');
})

router.get('/products/:id', (req,res)=>{

let singleProduct = products.find(p=>{
  return p.id==req.params.id
});

if(!singleProduct){
  console.log('Product not found');
  return res.status(404).send('Product not found');
}
res.send(singleProduct[0]);
})


router.get('/products',(req,res)=>{
  res.send(products);
})

router.post('/products',(req,res)=>{
  console.log(req.body);
  const newproduct = {
    id: products.length+1,
    name: req.body.name,
    price: req.body.price
  }

  products.push(newproduct);
  res.status(200).send(products);
})

router.put('/products/:id',(req,res)=>{
 const id = req.params.id;
 console.log(id);
 product = products.find(p=>p.id==id);
 console.log(product)
 product.name = req.body.name || product.name;
 product.price = req.body.price || product.price;
 products.push(product);
 res.status(200).send(products);
})

router.delete('/products/:id',(req,res)=>{
  const id = req.params.id;
  let s = products.filter(p=>{
    console.log(p.id!=id);
    return p.id!=id
  });
  console.log(s)
  res.status(200).send(s);
})


module.exports = router;