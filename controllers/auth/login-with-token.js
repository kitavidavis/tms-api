const User = require("../../models/users");
const { signToken } = require('../../middlewares/jsonwebtoken')

async function loginWithToken(request, response, next) {
  try {
    const { uid } = request.auth

    User.getUserById(uid, function(err, user){
      if(err) throw err;

      user.password = undefined;
      delete user.password;

      const token = signToken({uid: user._id, role: user.role});

      response.status(200).json({
        message: 'Account fetched',
        data: user,
        token,
      })
    })
   
  } catch (error) {
    console.error(error)
    response.status(500).send()
  }
}

module.exports = loginWithToken
