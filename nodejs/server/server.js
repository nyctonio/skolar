const express = require('express')
const app = express()

// a basic user management application

let users = [
    "usha", "mukesh", "sujith", "ankit", "shreya", "pooja"
]

app.get('/', function (req, res) {
    res.json({
        message: 'This is an user application'
    })
})


// fetching the users
app.get('/getuser', (req, res) => {
    res.json({
        users
    })
})

// fetching the user by username
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


// addign the users to our list
app.post('/adduser/:name', (req, res) => {
    let name = req.params.name
    users.push(name)
    res.json({
        message: `${name} added successfully`
    })
})

// deleting the user from our list
app.delete('/deleteuser/:name', (req, res) => {
    let name = req.params.name
    users = users.filter((user) => {
        return user !== name
    })
    res.json({
        message: `${name} deleted successfully`
    })
});

// update the
app.patch('/updateuser/:name/:updatedname', (req, res) => {
    let name = req.params.name
    let updatedname = req.params.updatedname
    users = users.map((user) => {
        if (user === name) {
            return updatedname
        }
        else {
            return user
        }
    })
    res.json({
        message: `${name} updated successfully`
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


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})