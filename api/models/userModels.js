import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        user_id: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
          type: String,
          required: true,
        },
        mobile_no: {
          type: String,
          required: false,
        },
    },
    {
        timestamps: true, // createdAt, updatedAt
    }
);

const User = mongoose.model("User", userSchema);

export default User;

