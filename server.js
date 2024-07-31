const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your-secret-key-here');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/payment', async (req, res) => {
  const { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method: id,
      confirm: true,
    });
    res.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    res.json({ success: false, error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});