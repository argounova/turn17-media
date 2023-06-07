import mongoose from "mongoose"
import bcrypt from 'bcrypt'
import validator from 'validator'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Account already exists'],
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your email'],
        minLength: [8, 'Passwords must be at least 8 characters'],
        select: false
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User