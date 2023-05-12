import mongoose, { mongo } from "mongoose";

// An interface that describe the properties that
// are required to create a new User
interface UserAttrs {
    displayName: string,
    email: string,
    password: string
}

// An interface that describe the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
    displayName: string,
    email: string,
    password: string
}


const userSchema = new mongoose.Schema({
    displayName: {
        type: String,   
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},  {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.password
            delete ret.__v
        }
    }
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export {User}

