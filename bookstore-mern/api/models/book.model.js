const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
    },
    published: {
      type: String,
      required: [true, "Year of publishing is required"],
      maxLength: 4,
    },
    genre: {
      type: String,
      required: [true, "Genre must be specified"],
    },
    inStock: {
      type: Number,
      min: 1,
    },
    coverImgUrl: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
