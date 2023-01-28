// Module imports
const app = require('./app')
const mongoDB = require('./app/config/mongoose')

const port = process.env.PORT || '3000'

main().catch(error => {
    console.error(error)
    process.exit(1)
})

async function main() {
    await mongoDB.connect()
    app.listen(port, () => console.log(`PhoneFinder API is listening on port ${port}`))
}
