const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    createLead,
    getLeads,
    updateLead,
    deleteLead
} = require("../controllers/leadController");


// Create lead
router.post(
    "/",
    protect,
    createLead
);


// Get leads
router.get(
    "/",
    protect,
    getLeads
);


// Update lead
router.put(
    "/:id",
    protect,
    updateLead
);


// Delete lead
router.delete(
    "/:id",
    protect,
    deleteLead
);


module.exports = router;