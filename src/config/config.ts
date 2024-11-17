// src/config/config.ts
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const envConfig = {
  port: process.env.PORT || 3000, // Fallback to 3000 if PORT is not set
  connectionString: process.env.CONNECTION_STRING, // Ensure .env has this variable
};
