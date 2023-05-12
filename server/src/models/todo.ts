import mongoose, { mongo } from "mongoose";

// An interface that describe the properties that
// are required to create a new User
export interface TodoAttrs {
    title: string,
    image?: string,
    file?: string,
    tag?: string,
    userId: string
}


// An interface that describe the properties
// that a Todo Model has
interface TodoModel extends mongoose.Model<TodoDoc> {
    build(attrs: TodoAttrs): TodoDoc
}

// An interface that describes the properties
// that a Todo Document has
interface TodoDoc extends mongoose.Document {
    title: string,
    image: string,
    file: string,
    tag: string
    userId: string
}

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    file: {
        type: String
    },
    tag: {
        type: String,
        enum: ["business", "personal", "sport"],
        default: 'personal'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        } 
    }
})

todoSchema.statics.build = (attrs: TodoAttrs) => {
    return new Todo(attrs)
}

const Todo = mongoose.model<TodoDoc, TodoModel>('Todo', todoSchema)

export {Todo}