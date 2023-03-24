const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Shedulleschema = new Schema({

    
    Sctact :{

        type : String,
        required : true 
    },

    Sadres :{

        type : String,
        required : true 
    },

     Scity:{

        type : String,
        required : true 
    },

    Sdate :{

        type : Date,
        required : true 
    },


})

const Shedulle = mongoose.model("Shedulle",Shedulleschema);

module.exports = Shedulle;