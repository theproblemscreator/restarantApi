
import jwt from 'jsonwebtoken';
import { fetchByEmail_ } from "../services/userService.js";

export const Login = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await fetchByEmail_(email);
        if (!existingUser) return res.status(404).json({ message: "User Not Found" });

        // 3. Create JWT token with role
        const token = jwt.sign(
            {
                id: existingUser.id,
                email: existingUser.email,
                role: existingUser.role, // Ensure this exists in your DB
            },
            'secrete-key',
            { expiresIn: '1h' }
        );

        res.status(200).json({
            message: "Login Successful",
            token,
            user: {
                email: email,
            }
        });

        res.status(200).json({
            message: "Login Successful",
            token,
            user: {
                id: existingUser.id,
                email: existingUser.email,
                role: existingUser.role
            }
        });


    } catch (error) {
        return res.status(500).json({ message: "Something Went Wrong..." });
    }
}

export const dashboard = async (req, res) => {
    try {
        return res.status(200).json({ message: "Dashboard Component..." });
    } catch (error) {
        return res.status(500).json({ message: "Something Went Wrong..." });
    }

}

