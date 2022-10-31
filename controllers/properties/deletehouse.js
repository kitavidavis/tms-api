const House = require("../../models/properties");

async function deletehouse(req, res){
    try {
        const obj = req.body;

        House.getHouseById(obj.id, function(err, house){
            if(err){
                throw err;
            }

            if(house){
                House.deleteHouse(obj.id, function(err){
                    if(err){
                        throw err;
                    }

                    return res.status(200).send({message: "Done"})
                })
            } else {
                return res.status(400).send({message: "House does not exists!"});
            }
        })

    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = deletehouse;