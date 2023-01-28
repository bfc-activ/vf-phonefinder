const mongoose = require('mongoose')

// Future proofing setting
mongoose.set('strictQuery', false)

module.exports = {
    connect: async () => {
        try {
            const MONGO_URI = process.env.MONGO_URI
            await mongoose.connect(MONGO_URI)
            console.log('Successful connection to MongoDB')
        } catch (e) {
            console.log('Please ensure that the MONGO_URI environment variable is set correctly. You may need to add parentheses around the URI string.')
            throw e
        }
    }
}
