const express = require('express')
const app = express()

let users = [
    "usha", "mukesh", "sujith", "ankit", "shreya", "pooja"
]

app.get('/', function (req, res) {
    res.json({
        message: 'This is an user application'
    })
})

app.get('/getuser', (req, res) => {
    res.json({
        users
    })
})

app.get('/:username', (req, res) => {
    let username = req.params.username
    if (users.includes(username)) {
        return res.json({
            username: `Hello ${username}`
        })
    }
    else {
        return res.json({
            message: `User Not Found`
        })
    }
});



app.post('/adduser/:name', (req, res) => {
    let name = req.params.name
    users.push(name)
    res.json({
        message: `${name} added successfully`
    })
})

app.delete('/deleteuser/:name', (req, res) => {
    let name = req.params.name
    users = users.filter((user) => {
        return user !== name
    })
    res.json({
        message: `${name} deleted successfully`
    })
});



//  /         - google.com
//  /about    - google.com/about

// -GET -POST -PUT -DELETE -PATCH

// GET - Read Data from server
// POST - Create data / update a data on your server
// PUT - send data to server
// PATCH - applying some modifictaions / updates on your server
// DELETE - delete the data from server


app.listen(3004, () => {
    console.log('Server is running on port 3004')
})