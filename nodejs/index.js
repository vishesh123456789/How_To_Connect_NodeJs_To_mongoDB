// You have to install express mongoose and mongodb

const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());



app.listen(8080,()=>{
    console.log("server connected");
})

mongoose.connect(// Add your connection string here,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
 
)
.then((x) => {
    console.log("connected to Mongo!");

})

.catch((err) => {
    console.log("Error");
});


