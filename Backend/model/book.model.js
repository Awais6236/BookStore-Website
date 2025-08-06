import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String
})

export default mongoose.model("Book", bookSchema);