var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var CommentSchema = new mongoose.Schema({
    message: {
      type: String,
      required: [true, 'Comment is required'],
      trim: true
    },
    _post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    username: {
      type: String,
      required: [true, 'A name is required'],
      trim: true}
  },
      {
        timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
      }
    });

module.exports = mongoose.model('Comment', CommentSchema);
