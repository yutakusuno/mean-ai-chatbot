import { connect, disconnect } from "mongoose";

const connectToDatabase = async () => {
  try {
    await connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Could not Connect To MongoDB");
  }
};

const disconnectToDatabase = async () => {
  try {
    await disconnect();
  } catch (error) {
    console.log(error);
    throw new Error("Could not Disconnect From MongoDB");
  }
};

export { connectToDatabase, disconnectToDatabase };
