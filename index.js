var express = require('express')
const res = require('express/lib/response')
var app = express()

app.get('/', (req, res) => {
    var lastName = process.argv.slice(2);
    if(lastName) {
        res.send(`${arg} is the king!`)
    }
    res.send("Hello World")
})

app.listen(3000, () => {
    console.log("Listening on port 3000...")
})