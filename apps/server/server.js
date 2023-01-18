const app = require('./app')
const port = process.env.PORT || '3000'

app.listen(port, () => {
    console.log(`PhoneFinder API is listening on port ${port}.`)
})

console.log(process.env.MONGO_URI)
