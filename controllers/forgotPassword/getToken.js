const Token = require("../../models/tokens");

async function getToken(req, res, next) {
    try {
        const obj = req.body;

        Token.getToken(obj.creatorID, function(err, token){
            if(err) throw err;

            res.status(200).json({
                message: "fetched...",
                data: token
            });
        });
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = getToken;