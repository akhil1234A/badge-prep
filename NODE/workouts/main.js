const express = require('express');
const app = express();

const workout1 = require('./workout_1');

app.use(express.json());
app.use(workout1);


app.listen(3000,()=>{
  console.log('server start running');
})