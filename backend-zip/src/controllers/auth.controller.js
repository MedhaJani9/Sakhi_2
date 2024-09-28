const userService = require("../services/user.service.js");
const jwtProvider = require("../config/jwtProvider.js");
const bcrypt = require("bcrypt");
const cartService = require("../services/cart.service.js");

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);

        const jwt = jwtProvider.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(200).send({ jwt, message: "Register success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

const login = async (req, res) => {
    const { password, email } = req.body;
    try {
        const user = await userService.getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: 'User not found with Email', email });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const jwt = jwtProvider.generateToken(user._id);

        return res.status(200).send({ jwt, message: "Login success" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// // New admin login function
// const adminLogin = async (req, res) => {
//     const { password, email } = req.body;
//     try {
//         const admin = await userService.getUserByEmail(email);

//         if (!admin || admin.role !== "ADMIN") {
//             return res.status(404).json({ message: 'Admin not found with Email', email });
//         }

//         const isPasswordValid = await bcrypt.compare(password, admin.password);

//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid password' });
//         }

//         const jwt = jwtProvider.generateToken(admin._id);

//         return res.status(200).send({ jwt, message: "Admin login success" });
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// };

module.exports = { register, login, adminLogin };
