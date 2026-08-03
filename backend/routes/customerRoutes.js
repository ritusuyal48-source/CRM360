const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    createCustomer,
    getCustomers,
    updateCustomer,
    deleteCustomer
} = require("../controllers/customerController");


// Create customer
router.post(
    "/",
    protect,
    createCustomer
);


// Get customers
router.get(
    "/",
    protect,
    getCustomers
);


// Update customer
router.put(
    "/:id",
    protect,
    updateCustomer
);


// Delete customer
router.delete(
    "/:id",
    protect,
    deleteCustomer
);


module.exports = router;