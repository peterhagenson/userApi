import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minlength: 3,
        maxlength: 30,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    city: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'my city',
    },
    state: {
        type: String,
        trim: true,
        maxlength: 2,
        minlength: 2,
        default: 'my state'
    }

})

export default mongoose.model('User', UserSchema)