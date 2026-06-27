const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    course: {
        type: String,
        required: true
    },
    phone: String,
    address: String,
    dob: Date,
    status: {
        type: String,
        default: "Pending"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Application", applicationSchema);