const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const customerModel = require('./models/customer')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/customer");

app.post('/register', (req, res) => {
    const {name , email, password} = req.body;
    customerModel.findOne({email: email})
    .then(user => {
        if(user.email === email){
            res.json("Account exists")
        } else {
            customerModel.create(req.body)
            .then(customer => res.json(customer))
        }
    })
    .catch(err => res.json(err))
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    customerModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("The password is incorrect")
            }
        } else {
            res.json("Record not found")
        }
    })
    .catch(err => res.json(err))
})

app.get("/logout", (req, res) => {
    return res.json("Success");
})

app.get("/login", (req, res) => {
    return res.json("Success");
})
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})