import mongoose from 'mongoose';
import 'dotenv/config.js';

class MongoDB {
    static init() {
      mongoose.connect(process.env.DB).then(() => {
        console.log("Application connected to MongoDB");
    }).catch((err) => console.log({ message: err.message }));
    }
  }

export { MongoDB }