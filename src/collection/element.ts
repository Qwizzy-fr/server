import mongoose from "mongoose";
const autoIncrement = require('mongoose-sequence')(mongoose);

const ElementSchema = new mongoose.Schema({
    id: Number,
    name: String, 
    color: String,
    type: String,
});

ElementSchema.plugin(autoIncrement, { inc_field: 'id' });

export default mongoose.model("Element", ElementSchema)