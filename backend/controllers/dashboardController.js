const Customer = require("../models/Customer");
const Lead = require("../models/Lead");


// Dashboard Statistics
const getDashboardStats = async (req, res) => {

    try {

        // Total customers created by logged-in user
        const totalCustomers = await Customer.countDocuments({
            createdBy: req.user._id
        });


        // Total leads created by logged-in user
        const totalLeads = await Lead.countDocuments({
            createdBy: req.user._id
        });


        // Converted leads
        const convertedLeads = await Lead.countDocuments({
            createdBy: req.user._id,
            status: "Converted"
        });


        // New leads
        const newLeads = await Lead.countDocuments({
            createdBy: req.user._id,
            status: "New"
        });


        // Conversion percentage
        let conversionRate = 0;

        if (totalLeads > 0) {
            conversionRate = (
                (convertedLeads / totalLeads) * 100
            ).toFixed(2);
        }


        res.status(200).json({

            success: true,

            stats: {
                totalCustomers,
                totalLeads,
                convertedLeads,
                newLeads,
                conversionRate: conversionRate + "%"
            }

        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


module.exports = {
    getDashboardStats
};