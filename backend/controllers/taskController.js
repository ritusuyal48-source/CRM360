const Task = require("../models/Task");


// Create Task
const createTask = async (req, res) => {

    try {

        const task = await Task.create({
            ...req.body,
            createdBy: req.user._id
        });


        res.status(201).json({
            success: true,
            message: "Task created successfully",
            task
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Get Tasks
const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find({
            createdBy: req.user._id
        })
            .populate("customer", "name email")
            .populate("assignedTo", "name email");


        res.status(200).json({
            success: true,
            tasks
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Update Task
const updateTask = async (req, res) => {

    try {

        const task = await Task.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.user._id
            },
            req.body,
            {
                new: true
            }
        );


        if (!task) {

            return res.status(404).json({
                success: false,
                message: "Task not found"
            });

        }


        res.json({
            success: true,
            message: "Task updated successfully",
            task
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



// Delete Task
const deleteTask = async (req, res) => {

    try {

        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user._id
        });


        if (!task) {

            return res.status(404).json({
                success: false,
                message: "Task not found"
            });

        }


        res.json({
            success: true,
            message: "Task deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};