const mongoose = require('mongoose');

const ChatGPTSchema = new mongoose.Schema(
  {
    _idUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    request: String,
    response: String,
    like: Boolean
  },
  { timestamps: true }
);

module.exports = mongoose.model('ChatGPT', ChatGPTSchema);

/*
{
   "record" : 100,
   "old_record" : 0,
   "_idUser": "6491ef692100a4af034750ee"
}




*/