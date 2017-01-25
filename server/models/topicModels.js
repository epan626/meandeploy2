var mongoose = require('mongoose'),
    Schema   = mongoose.Schema

var TopicSchema = new mongoose.Schema({
    topic: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      require: [true, 'A category must be selected']
    },
    _post: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
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

module.exports = mongoose.model('Topic', TopicSchema);
