const Customer = require("../models/Customer");


// Create Customer
const createCustomer = async (req, res) => {
    try {

        const customer = await Customer.create({
            ...req.body,
            createdBy: req.user._id
        });

        res.status(201).json({
            success: true,
            message: "Customer created successfully",
            customer
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Get All Customers
const getCustomers = async (req, res) => {
    try {

        const customers = await Customer.find({
            createdBy: req.user._id
        });

        res.status(200).json({
            success: true,
            customers
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Update Customer
const updateCustomer = async (req, res) => {
    try {

        const customer = await Customer.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.user._id
            },
            req.body,
            {
                new: true
            }
        );


        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }


        res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            customer
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



// Delete Customer
const deleteCustomer = async (req, res) => {
    try {

        const customer = await Customer.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });


        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }


        res.status(200).json({
            success: true,
            message: "Customer deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};



module.exports = {
    createCustomer,
    getCustomers,
    updateCustomer,
    deleteCustomer
};