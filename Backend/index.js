import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'

import bookRoute from './route/book.route.js';
import { getBook } from './controller/book.controller.js';
import userRoute from './route/user.route.js'

const app = express();

app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3001;
const mongoDB = process.env.mongoDB;

// mongoDB connection
try {
  mongoose.connect(mongoDB)
  console.log("mongoDB connected successfully!")
} catch (error) {
  console.log('Error', error);
}

// Defining Routes
app.use('/book', bookRoute)
app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
