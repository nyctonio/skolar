const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({
        message: 'Hello World'
    })
})

app.get('/about', (req, res) => {
    res.json({
        message: 'About Page'
    });
})

//  /         - google.com
//  /about    - google.com/about
// -GET -POST -PUT -DELETE -PATCH
app.listen(3004, () => {
    console.log('Server is running on port 3004')
})