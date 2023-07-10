import mongoose from "mongoose"

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
    },
    hashedPassword: {
        type: String,
        required: [true, 'Please enter your email'],
        minLength: [8, 'Passwords must be at least 8 characters'],
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
})

// userSchema.pre('save', async function(next) {
//     if(!this.isModified('password')) {
//         next()
//     }
//     this.password = await bcrypt.hash(this.password, 10)
//     next()
// })

// userSchema.methods.comparePassword = async function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// }

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User