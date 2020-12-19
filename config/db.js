const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://Abhishek:root@cluster0.3lz2o.mongodb.net/Quiz?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("connected to mongodb"))
    .catch((err) => console.log(err));

module.exports = mongoose;