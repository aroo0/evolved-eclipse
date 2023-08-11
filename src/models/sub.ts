import mongoose from 'mongoose';
const { Schema, models, model } = mongoose;

const SubAccountSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required'],
    },
    date: {
        type: Date,
        required: [true, "Date is required"]
    }
});


const SubAccount = models.User || model('SubAccount', SubAccountSchema);

export default SubAccount;