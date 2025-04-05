// // // const jwt = require("jsonwebtoken");
// // const User = require("../model/userSchema");
// // require("dotenv").config();
// // const Authenticate = async (req, res, next) => {
// //   try {
// //     const token = req.cookies["jwttoken"];

// //     console.log("req", req);
// //     console.log("req.token", token);
// //     console.log("req.cookies", req.cookies);

   
// //     // const verifyToken = jwt.verify(token, "secret");

// //     const rootUser = await User.findOne({
// //       // _id: verifyToken._id,
// //       // "tokens.token": token,
// //     });

// //     if (!rootUser) {
// //       throw new Error("User Not Found!");
// //     }

// //     req.token = token;
// //     req.rootUser = rootUser;
// //     req.userId = rootUser._id;

// //     next();
// //   } catch (err) {
// //     res.status(401).send("Unauthorized:No token provided");
// //     console.log("🚀 ~ file: authenticate.js:22 ~ Authenticate ~ err", err);
// //   }
// // };

// // module.exports = Authenticate;


// const User = require("../model/userSchema");

// const Authenticate = async (req, res, next) => {
//   try {
//     // Get token from cookie
//     // const token = req.cookies["session_token"];
//     // console.log("Cookie Token:", token);

//     // if (!token) {
//     //   return res.status(401).send("Unauthorized: No session token found");
//     // }

//     // Find user with the token stored in DB
//     const rootUser = await User.findOne({ sessionToken: token });

//     if (!rootUser) {
//       return res.status(401).send("Unauthorized: Invalid session token");
//     }

//     req.token = token;
//     req.rootUser = rootUser;
//     req.userId = rootUser._id;

//     next();
//   } catch (err) {
//     console.error("Authentication Error:", err);
//     res.status(500).send("Internal Server Error");
//   }
// };

// module.exports = Authenticate;

const User = require("../model/userSchema");

const Authenticate = async (req, res, next) => {
  try {
    if (!req.session || !req.userId) {
      return res.status(401).send("Unauthorized: Not logged in");
    }

    const rootUser = await User.findById(req.userId);

    if (!rootUser) {
      return res.status(401).send("Unauthorized: User not found");
    }

    req.rootUser = rootUser;
    req.userId = rootUser._id;
    return res.status(200).json({ message: "Authenticated", user: rootUser });
    
    next();
  } catch (err) {
    console.error("Authentication Error:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = Authenticate;
