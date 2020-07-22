const jwt = require('jsonwebtoken')

module.exports.generateToken = async (user, privateKey, tokenLife) => {
    try{
        const token = await new Promise((resolve, reject) => {
            jwt.sign(
                {data: user},
                privateKey,
                {
                    algorithm: "HS256",
                    expiresIn: tokenLife,
                },
                (error, token) => {
                    if (error) {
                        return reject(error);
                    }
                    resolve(token);
                });
        })
        return token    
    }
    catch(err)
    {
        console.log("err ", err)
        return err;
    }
}

module.exports.HashPass = (pass) => {
    return pass
}