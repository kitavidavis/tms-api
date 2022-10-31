const House = require("../../models/properties");

async function gethouses(req, res){
    try {
        const obj = req.body;

        House.getAllHouses(obj.username, function(err, houses){
            if(err){
                throw err;
            }

            return res.status(200).send({data: houses})
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = gethouses;