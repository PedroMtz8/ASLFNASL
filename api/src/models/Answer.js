const { Schema, model } = require('mongoose')

const schema = new Schema({
    body: { type: String, required: true },
    score: { type: Number, default: 0 },
    voters: { type: Object, default: {} },
    numberComments: { type: Number, default: 0 },
    user: {
        type: String,
        ref: 'User',
        immutable: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        immutable: true
    }
}, { timestamps: true, minimize: false })

module.exports = model('Answer', schema)