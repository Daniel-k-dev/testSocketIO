import mongoose from "mongoose";
const { Schema } = mongoose;

// 접속 + 데이터베이스 생성
export const kittySchema = await mongoose.connect(process.env.MONGODB);