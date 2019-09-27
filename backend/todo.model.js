const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_BatchID: {
        type: String
    },
    todo_CreateDate: {
        type: String
    },
    todo_CreateBy: {
        type: String
    },
    todo_Status: {
        type: String
    },
    todo_Action: {
         type: String
    },
    
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);  