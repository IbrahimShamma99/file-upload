var mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    file:{type:Buffer}
});

mongoose.model("file",fileSchema);