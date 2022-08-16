import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: false,
    },
    email:{
        type:String,
        required: false,
        unique: true,
    },
    password:{
        type:String,
        required: false,
    },
    isAdmin:{
        type:Boolean,
        required: true,
        default: true,
    },
},
{
    timesStamp: true,
}
)

const User = mongoose.model('User', userSchema)

export default User