const Token = require("../../models/tokens");

async function create(req, res, next) {
    try {
        const obj = req.body;

        const newToken = new Token({
            username: obj.username,
            expireAt: obj.expireAt,
            creatorID: obj.creatorID
        });

        Token.createToken(newToken, function(err, token){
            if(err) throw err;

            res.status(200).json({
                message: "token created",
                data: token
            });
        });
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = create;