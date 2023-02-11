module.exports = (e, req, res, next) => {  // An error handler is defined by having at least 4 parameters
    console.error(e.message)
    res.status(e.status || 500)  // default error 500 (server-side)
    res.json({error: e.message})  // JSON for FE
}
