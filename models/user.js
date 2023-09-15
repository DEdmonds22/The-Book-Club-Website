const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    userName: { type: String, unique: true, required: true },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true,
        validate: {
            validator: function (value) {
                return /(?=.*\d)(?=.*[!@#$%^&*])/.test(value);
            },
            message: "Password must contain at least one number and one special character.",
        }
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

// this pre-save hook middleware will hash the password anytime the password has changed
userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next(); // `this` is the user doc

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
})

module.exports = model("User", userSchema);