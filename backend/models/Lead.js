const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },

        phone: {
            type: String,
            required: true
        },

        company: {
            type: String,
            default: ""
        },

        source: {
            type: String,
            enum: [
                "Website",
                "Social Media",
                "Referral",
                "Advertisement",
                "Other"
            ],
            default: "Other"
        },

        status: {
            type: String,
            enum: [
                "New",
                "Contacted",
                "Qualified",
                "Converted",
                "Lost"
            ],
            default: "New"
        },

        priority: {
            type: String,
            enum: [
                "Low",
                "Medium",
                "High"
            ],
            default: "Medium"
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model(
    "Lead",
    leadSchema
);