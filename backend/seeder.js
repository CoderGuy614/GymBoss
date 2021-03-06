import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users2 from "./data/users2.js";
import User from "./models/userModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();

    const createdUsers = await User.insertMany(users2);
    // const adminUser = createdUsers[0]._id;
    // const sampleProducts = products.map((prod) => {
    //   return { ...prod, user: adminUser };
    // });
    // await Product.insertMany(sampleProducts);
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();

    console.log("Destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
