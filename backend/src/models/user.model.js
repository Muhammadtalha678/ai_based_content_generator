import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password: { type: String, required: true },
    role: { type: string, enum: ['admin', 'user'] },
    avatar:{type:string}
})

const UserModal = mongoose.model('users', UserSchema)
export default UserModal