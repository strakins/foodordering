import {model, models, Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {
        type: String, 
        required: true,
        validate: pass => {
            if(!pass?.length || pass.length < 5){
                new Error('Password must be at least 5 characters');
                return false
            }
        },

    }
}, {timestamps: true});

// Add a setup to encrypt the password using bycrypt
UserSchema.post('validate', function (user) {
    const userPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(userPassword, salt);
     
})

export const User = models?.User || model('User', UserSchema);