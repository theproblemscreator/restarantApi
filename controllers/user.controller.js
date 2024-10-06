//import User from '../model/user.schema.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.schema.js';
import { Op } from 'sequelize';

dotenv.config();

//function for registering user
export const register = async (req, res) => {
   
    let { fname, lname, mobile, email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: email },
                    { mobile: mobile }
                ]
            }
        });

        if (user) {
            return res.status(400).send({
                message: 'User already exists, please try again.',
                statusCode: 400
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        // Create a new user
        user = await User.create({ fname, lname, mobile, email, password});

        console.log(user);

        return res.status(201).send({
            message: 'User registered successfully.',
            statusCode: 201
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send({
            message: 'Something went wrong, please try again.',
            statusCode: 500
        });
    }
}

//function for user log in
export const login = async (req, res) => {
    const { emailOrMobile, password } = req.body; // Changed email to identifier for flexibility

    try {
        // Find user by email or mobile
        const user = await User.findOne({
            where: {
                [Op.or]: [
                    { email: emailOrMobile },
                    { mobile: emailOrMobile }
                ]
            }
        });

        // If user doesn't exist, return error
        if (!user) {
            return res.status(400).json({
                message: 'Invalid email or mobile number or password.',
                statusCode: 400
            });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid email or mobile number or password.',
                statusCode: 400
            });
        }

        // Generate a token
        const token = jwt.sign({ id: user.id }, 'restaurant_management', { expiresIn: '1h' });

        await User.update({ token }, {
            where: { id: user.id }
        });

        return res.status(200).json({
            statusCode: 200,
            message: 'Login successful!',
            data: {
                id: user.id,
                fname: user.fname,
                lname: user.lname,
                mobile: user.mobile,
                email: user.email,
                token
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Something went wrong, please try again.',
            statusCode: 500
        });
    }
};

// Profile details
export const profileDetails = async (req, res) => {
    try {
        // Assuming req.user is populated with user info from a JWT middleware
        const userId = req.user.id; // Use `id` for Sequelize instead of `_id`

        // Find user by ID
        const user = await User.findOne({
            where: {
                id: userId // Sequelize uses lowercase by default for fields
            }
        });

        // If user doesn't exist, return error
        if (!user) {
            return res.status(400).send({
                message: 'Invalid token, please authenticate.',
                statusCode: 400
            });
        }

        // Destructure to omit password and other fields you don't want to return
        const { password, createdAt, updatedAt, ...userData } = user.dataValues;

        delete userData.token;

        return res.status(200).send({
            message: 'OK',
            statusCode: 200,
            data: userData
        });

    } catch (e) {
        console.error(e); // Log the error for debugging
        return res.status(500).send({
            message: 'Something went wrong, please try again.',
            statusCode: 500
        });
    }
};

// Function for logging out the user
export const logout = async (req, res) => {

    try {
        // Assuming you have a User model and `req.user` contains the logged-in user's information
        const userId = req.user.id; // Get user ID from the authenticated user

        // Find the user and update the token field
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).send({
                message: 'User not found.',
                statusCode: 404
            });
        }

        // Update the token to an empty string or handle it as per your design
        user.token = ''; // Assuming there's a token field in your User model
        await user.save(); // Save the changes

        return res.status(200).send({
            message: 'Logout successful.',
            statusCode: 200
        });

    } catch (e) {
        console.error(e); // Log the error for debugging
        return res.status(500).send({
            message: 'Something went wrong, please try again.',
            statusCode: 500
        });
    }
};


