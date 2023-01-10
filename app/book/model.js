import { DataTypes } from "sequelize";
import sequelize from "../conn.js";

// add model for Book
const Book = sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
    // Will become `is_paperback` in table due to `underscored` flag
    isPaperback: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: "book",
  }
);

module.exports = Book;
