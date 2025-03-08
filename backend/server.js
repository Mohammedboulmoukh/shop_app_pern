import express from "express"; // framework
import helmet from "helmet"; // security
import cors from "cors"; // cross-origin resource sharing
import morgan from "morgan"; // logging
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";
import { neon } from "@neondatabase/serverless";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json()); // allow to us parse the income data
app.use(helmet()); // security
app.use(cors());
app.use(morgan("dev"));

// routes for products
app.use("/api/products", productRoutes);


async function initDB(){
  try {
    await sql`
            CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );`
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting to the database", error);
  }
};


initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
})



// the port where the server is running

// app.listen(PORT, () => {
//   console.log("Server is running on port "+  PORT);
// });
