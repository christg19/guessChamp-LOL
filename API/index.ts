import express from "express";
import dotenv from "dotenv"
import cors from "cors"

const connectDB = require('./config/db');
const app = express();

app.use(cors());


// req body middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Load config
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

connectDB();

// Routes 
app.use('/', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});