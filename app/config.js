// Create app/cofig.js file and add the following code
// the only file that accesses the .env file is the config.js file (in this case)
import dotenv from "dotenv";

dotenv.config();

export default {
  db: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};
