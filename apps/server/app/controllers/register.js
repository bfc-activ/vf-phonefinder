const { register, validateRequestBody } = require('../services/register')
const jwt = require('jsonwebtoken')

module.exports = {
    post: async (req, res, next) => {
        await validateRequestBody(req.body)



        // try {
        //     // validateInput()
        // } catch (e) {
        //
        // }
        // const { error, isValid } = validateRegisterInput(req.body)

        // try {
        //     // get data from request
        //     const user = req.user
        //     const token = req.body.headers.Authorization
        //     const tokenArray = token.split(' ')
        //
        //     jwt.verify(
        //         tokenArray[1],
        //         'secret',
        //         { id: user.id },
        //         function (err, decoded) {
        //             if (err) {
        //                 res.status.send({
        //                     success: false,
        //                     message: 'Token provided was manipulation'
        //                 })
        //             } else {
        //                 next()
        //             }
        //         }
        //     )
        // } catch (e) {
        //     console.log(e)
        //     res.status(500).send({ success: false, error: e.message })
        // }

        try {

            res.send(await register())
        } catch (err) {
            console.error(`Error while posting register`, err.message)
            next(err)
        }
    }
}


