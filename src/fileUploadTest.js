const express = require('express')
const app = express()
const port = 8000

app.use(express.urlencoded({extended:true}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))