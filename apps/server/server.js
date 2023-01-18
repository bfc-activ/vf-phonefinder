const app = require('./app')
const port = process.env.PORT || '3000'

app.listen(port, () => {
    console.log(`PhoneFinder API is listening on port ${port}.`)
})

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI)
}