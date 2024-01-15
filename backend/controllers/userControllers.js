const { firebase, auth, db } = require("../firebase/config");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require("firebase/auth");
const { addDoc, collection } = require("firebase/firestore");
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.secretOrPublicKey;



const generateToken = (id, email) => {
    const payload = {
        id,
        email
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

    return token;
}



module.exports.signup = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await createUserWithEmailAndPassword(auth, email, password);
        const token = generateToken(user.user.uid, user.user.email);
        res.status(200).json({
            email: user.user.email,
            photoUrl: user.user.photoURL,
            token
        });
    } catch (error) {
        console.log("Failed to signup user:", error);
        res.status(400).json({ message: "Failed to signup user" });
    }
};


module.exports.signupgoogle = async (req, res) => {
    
}


module.exports.login = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await createUserWithEmailAndPassword(auth, email, password);
        const token = generateToken(user.user.uid, user.user.email);
        res.status(200).json({
            email: user.user.email,
            photoUrl: user.user.photoURL,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Failed to login user" });
    }
};

module.exports.logout = async (req, res) => {};

module.exports.checkAuth = async (req, res) => {};

module.exports.createBoard = async (req, res) => {
    try {
        const { boardName, users } = req.body;
        const board = {
            boardName,
            users
        };
        // save the board to the DB
        await addDoc(collection(db, "boards"), board);
        res.status(200).json({ message: "Board created successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Failed to create board" });
    }
};