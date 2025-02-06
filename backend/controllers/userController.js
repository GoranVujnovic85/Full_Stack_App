/*=============================================================================================*/
/*------------------------------------ CRUD operations for User -------------------------------*/
/*=============================================================================================*/

const bcrypt = require('bcrypt');
const { User } = require('../models');
const { successResponse, errorResponse } = require('../utils/responseHandler');

class UserController {
    
        // Functionality for user authentication
        async authenticateUser(email, password) {
            try {
                // Check if email and password are entered
                if (!email || !password) {
                    throw new Error('Email and password are required.');
                }

                // Search for users by email
                const user = await User.findOne({ where: { email } });

                if (!user) {
                    throw new Error('Invalid credentials.');
                }

                // Comparison of the entered password with the encrypted password in the database
                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {
                    throw new Error('Invalid credentials.');
                }

                return user;  // Return the user if the data is correct
            } catch (error) {
                throw error;  // Throw an error if something goes wrong
            }
        }
    
        async login(req, res) {
            try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
        
            if (!user) {
                return res.status(401).json({ message: "Invalid login information" });
            }
        
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid login information" });
            }
        
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });
        
            res.json({ token, role: user.role });
            } catch (error) {
            console.error("Login error:", error);
            res.status(500).json({ message: "Server error" });
            }
        }
    
    async createUser(req, res) {
        try {

            console.log("sta mi ovde dajes");
            console.log(req.body); // 

            const { username, email, password, role } = req.body;
    
            if (!username || !email || !password) {
                return errorResponse(res, "Name, email, and password are required.", 400);
            }
    
            // Encrypt the password before saving it
            const hashedPassword = await bcrypt.hash(password, 10);

            // If the user has not sent a roll, we set "user"
            const newUser = await User.create({ 
                username, 
                email, 
                password: hashedPassword, 
                role: role || "user" 
            });
    
    
            return successResponse(res, "User created successfully.", newUser, 201);
        } catch (error) {
            return errorResponse(res, "Error creating user.", 500, error.message);
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await User.findAll({
                order: [['createdAt', 'DESC']],
            });

            return successResponse(res, "Users retrieved successfully.", users);
        } catch (error) {
            return errorResponse(res, "Error retrieving users.", 500, error.message);
        }
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return errorResponse(res, "User not found.", 404);
            }

            return successResponse(res, "User retrieved successfully.", user);
        } catch (error) {
            return errorResponse(res, "Error retrieving user.", 500, error.message);
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password, role } = req.body;

            const user = await User.findByPk(id);
            if (!user) {
                return errorResponse(res, "User not found.", 404);
            }

            if (name) user.name = name;
            if (email) user.email = email;
            if (password) user.password = password;
            if (role) user.role = role;

            await user.save();

            return successResponse(res, "User updated successfully.", user);
        } catch (error) {
            return errorResponse(res, "Error updating user.", 500, error.message);
        }
    }

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findByPk(id);

            if (!user) {
                return errorResponse(res, "User not found.", 404);
            }

            await user.destroy();

            return successResponse(res, "User deleted successfully.");
        } catch (error) {
            return errorResponse(res, "Error deleting user.", 500, error.message);
        }
    }
}

// Create an instance of the class
module.exports = new UserController();