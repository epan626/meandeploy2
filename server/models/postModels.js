var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var PostSchema = new mongoose.Schema({
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true
    },
    likes: {
      type: Number,
      default: 0
    },
    dislikes: {
      type: Number,
      default: 0
    },
    _topic: {
      type: Schema.Types.ObjectId,
      ref: 'Topic'
    },
    _comment: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }],
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    username: {
      type: String,
      required: [true, 'A name is required'],
      trim: true
    }
    },
      {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });

module.exports = mongoose.model('Post', PostSchema);
