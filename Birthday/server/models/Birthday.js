import mongoose from 'mongoose'

const bdaySchema = mongoose.Schema({
    name: String,
    bdate: Date,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Birthday = mongoose.model('Birthday', bdaySchema)

export default Birthday