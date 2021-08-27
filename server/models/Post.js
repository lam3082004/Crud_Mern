const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    status: {
        type: String,
        enum: ['prepare', 'running', 'finished']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    attachment: String,
    likeCoutn: {
        type: Number,
        defaut: 0
    }
})

module.exports = mongoose.model('posts', PostSchema)