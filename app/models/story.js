/**
 * Created by otuzgen on 22.04.2015.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StorySchema = new Schema({
    creator: {type:Schema.Types.ObjectId, ref: 'User'},
    content: String,
    created: {type:Date,default:Date.now()}
});

module.exports = mongoose.model('Story',StorySchema);
