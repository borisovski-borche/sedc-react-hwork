const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const booksRouter = require("./controllers/books.controller");
const decodeToken = require("./const/decode-token.const");

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://borisovski-borche:bookstorefstack@cluster0.jwhxf.mongodb.net/bookstore?retryWrites=true&w=majority";

const app = express();

const PORT = process.env.PORTT || 3001;
const HOST = process.env.HOST || "0.0.0.0";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => {
    console.log("Connected to the database");
  })
  .catch(err => console.log(`Something wentt wrong ${err}`));

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(decodeToken);

app.use("/api", booksRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server is active on PORT: ${PORT}`);
});
