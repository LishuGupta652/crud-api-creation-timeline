const express = require('express');
const app = express();

const  stripe = require('stripe')('sk_test_B7GrTxvFylAEGyG2lK3HpKet00wTSuaVPd')

app.get('/api', (req,res )=> {
    const apiKey = req.query.apiKey;

    // TODO : VALIDATE API KEYS
    // TODO : BILL USER FOR USAGE

    res.send({data: "🔥🔥🔥🔥🔥🔥"})

})
app.post('/checkout', async (req,res) => {
    const session = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ['card'],
        line_items: [
            {
                price: 'price_1JpdMcKIqhkigpvZFATNtYgb',
            },
        ],
        success_url: 'https://localhost:5000/success?',
        cancel_url: 'http://localhost:5000/error',
    })

    res.send(session);


})
app.listen(8080, () => console.log("Application running on https://localhost:8080"))
