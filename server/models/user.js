const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
    name : {
        type:String,
        unique: [true, "Different Name Please"],
        required: [true, "Name Cannot Be Empty"]
    },
    _created_polls: [{type: Schema.Types.ObjectId, ref: 'Poll'}],
}, { timestamps: true})

mongoose.model("User", UserSchema)


