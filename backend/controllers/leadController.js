const Lead = require("../models/Lead");


// Create Lead
const createLead = async (req, res) => {

    try {

        const lead = await Lead.create({
            ...req.body,
            createdBy: req.user._id
        });


        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            lead
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Get All Leads
const getLeads = async (req, res) => {

    try {

        const leads = await Lead.find({
            createdBy: req.user._id
        });


        res.status(200).json({
            success: true,
            leads
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Update Lead
const updateLead = async (req, res) => {

    try {

        const lead = await Lead.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.user._id
            },
            req.body,
            {
                new: true
            }
        );


        if (!lead) {

            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });

        }


        res.json({
            success: true,
            message: "Lead updated successfully",
            lead
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Delete Lead
const deleteLead = async (req, res) => {

    try {

        const lead = await Lead.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });


        if (!lead) {

            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });

        }


        res.json({
            success: true,
            message: "Lead deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



module.exports = {
    createLead,
    getLeads,
    updateLead,
    deleteLead
};