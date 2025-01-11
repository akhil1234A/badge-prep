//Middleware

const express = require('express');
const app = express();
const router = express.Router();

// Application-Level Middleware
app.use((req, res, next) => {
  console.log(`App Middleware - Request URL: ${req.url}`);
  next();
});

// Router-Level Middleware
router.use((req, res, next) => {
  console.log('Router Middleware - Products Endpoint');
  next();
});

// Error Throwing Route
router.get('/products', (req, res, next) => {
  try {
    throw new Error('Product Error!');
  } catch (err) {
    next(err);
  }
});

// Use the router
app.use('/api', router);

// Error-Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error Handler:', err.message);
  res.status(500).send('Server Error');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
