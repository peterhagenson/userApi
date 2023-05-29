import mongoose, {Error} from 'mongoose'


const connectDB = (url: string) => {
    return mongoose.connect(url)
}

export default connectDB