import mongoose from "mongoose";

// 스키마 구조 선언
export const Kitten = new mongoose.Schema(
  {
    name: String,
  },
  {
    autoCreate: false,
    capped: { size: 1024 },
  }
);
