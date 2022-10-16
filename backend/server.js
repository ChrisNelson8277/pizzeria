const express = require ('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.static('build/static/js'))

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([[
    1, { priceInCents: 10000, name: "Pepperoni Pizza"},
    2, { priceInCents: 10000, name: "Cheese Pizza"},
]])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return{
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        }
                        }
                    },
                    quantity: item.quantity
                }
            }),
            success_url: `${process.env.SERVER_URL}/success.html`,
            cancel_url: `${process.env.SERVER_URL}/success.html`
        })
        res.json({url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

app.listen(port, () => console.log(`Server started on port ${port}`))