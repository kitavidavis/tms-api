const House = require("../../models/properties");

async function getAllHouses(req, res){
    try{
        House.getHouses(function(err, houses){
            if(err){
                throw err;
            }

            return res.status(200).send({data:houses});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = getAllHouses;