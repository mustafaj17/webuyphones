const express = require('express')
const app = express()
const port = process.env.PRT || 3000;

app.get('/', (req, res) => res.send('Phone silations'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))