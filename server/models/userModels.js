var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    bcrypt   = require('bcrypt');

var UserSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: [true, 'Your first name is required'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'Your last name is required'],
      trim: true
    },
    username:{
      type: String,
      required: [true, 'Your username is required'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'A password is required'],
      minlength: 3
    },
    _topic: [{
      type: Schema.Types.ObjectId,
      ref: 'Topic'
    }],
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    _post: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
    _comment: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'}]
  },
    {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
    });

module.exports = mongoose.model('User', UserSchema);
