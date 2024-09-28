// const jwtProvider = require("../config/jwtProvider");
// const userService = require("../services/user.service");

// const adminOnly = async (req, res, next) => {
//     try {
//         const token = req.headers.authorization?.split(' ')[1];
//         if (!token) {
//             return res.status(401).send({ message: "Unauthorized" });
//         }

//         const userId = jwtProvider.getUserIdFromToken(token);
//         const user = await userService.findUserById(userId);

//         if (user.role !== "ADMIN") {
//             return res.status(403).send({ message: "Access denied" });
//         }

//         next();
//     } catch (error) {
//         return res.status(500).send({ error: error.message });
//     }
// };

// module.exports = adminOnly;
