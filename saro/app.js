const express = require("express");
const {sequelize,User} = require('./models');
//const User = require("./models/user");
const signupcontrol = require('./control/signupcontrol')

const app = express();


app.use(express.json());

app.get("/users", signupcontrol.getUser);
app.post("/add", signupcontrol.addUser)


const PORT=5000;

app.listen({port:PORT}, async () => {
    console.log(`server started at ${PORT}`)
    try{
    await sequelize.sync({force:true});
    }
    catch(e){
        console.log(e);
    }
})