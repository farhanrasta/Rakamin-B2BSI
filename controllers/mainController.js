const Book = require("../models/bookModel");

class MainController {
    async getAllData(req, res) {
        try {
            const books = await Book.find();
            res.json(books);
          } catch (error) {
            res.status(500).json({ message: error.message });
          }       
    }
    }


    async getDataById(req, res) {
        const {id} = req.params;
        try {
            const book = await Book.findById(id);
        if (!book) {
        
            return res.status(404).json({ message: "Book not found" });
        }
        res.json(book);
        } catch (error) {

        res.status(500).json({ message: error.message });
        }
module.exports = MainController;

