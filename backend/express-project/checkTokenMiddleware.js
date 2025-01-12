// const myToken = "12345";

const checkToken = (req, res, next) => {
    const token = req.query.token;
    console.log(token);

    if (!token) {
        return res.send({status: 1, message: "Token is missing. Please provide a valid token."});
    }
    if (token !== process.env.myToken) {
        return res.send({status: 1, message: "Invalid token. Please provide the correct token."});
    }

    next();
};

// app.use(checkToken); // middleware
module.exports = {checkToken}; // middleware