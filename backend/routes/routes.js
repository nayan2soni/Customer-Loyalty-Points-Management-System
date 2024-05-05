const express = require('express');
const router = express.Router();
const { Customer } = require('../models/models'); // Import your Sequelize models

// Route to get all customers
router.get('/customers', async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to create a new customer
router.post('/customers', async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const newCustomer = await Customer.create({
            Name: name,
            Email: email,
            Phone: phone,
            Address: address
        });
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to update an existing customer
router.put('/customers/:id', async (req, res) => {
    try {
        const customerId = req.params.id;
        const { name, email, phone, address } = req.body;
        await Customer.update({
            Name: name,
            Email: email,
            Phone: phone,
            Address: address
        }, {
            where: { CustomerID: customerId }
        });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to delete an existing customer
router.delete('/customers/:id', async (req, res) => {
    try {
        const customerId = req.params.id;
        await Customer.destroy({
            where: { CustomerID: customerId }
        });
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
