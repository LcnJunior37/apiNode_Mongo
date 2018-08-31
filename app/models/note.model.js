const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
  {
    name: String,
    email: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Note", NoteSchema);
