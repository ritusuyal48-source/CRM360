const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    try {

        // Get token from header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({
                success: false,
                message: "Not authorized, token missing"
            });
        }


        // Extract token
        const token = authHeader.split(" ")[1];

        console.log("Received Token:", token);
        console.log("Secret:", process.env.JWT_SECRET);
        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Find user
        req.user = await User.findById(decoded.id)
            .select("-password");


        if (!req.user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }


        next();


    } catch (error) {

        res.status(401).json({
            success: false,
            message: "Invalid token"
        });

    }
};


module.exports = protect;
