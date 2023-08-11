import mongoose from 'mongoose';

let isConnected: boolean = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(import.meta.env.MONGODB_URI, {
      dbName: "subs",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
    
  } catch (error: any) {
    console.log(error);
  }
}