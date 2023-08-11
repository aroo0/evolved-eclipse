import { Schema, model, models } from 'mongoose';


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