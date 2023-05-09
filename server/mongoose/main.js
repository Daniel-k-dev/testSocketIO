import mongoose from "mongoose";
import kittySchema from "./model/tempModel";

// 메인 함수
export async function main () {
  // NOTE: methods must be added to the schema before compiling it with mongoose.model()
  // 커스텀 메소드 설정
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  // complie
  const Kitten = mongoose.model("Kitten", kittySchema);
  await Kitten.createCollection();

  // 객체 생성
  const fluffy = new Kitten({ name: "fluffy" });
  // 스키마 설정 해야함
  // 아이디 커프텀 설정
  // fluffy._id = 1;

  // 함수 호출
  fluffy.speak();
  // 함수 가능
  // fluffy.fn();
  // 저장
  await fluffy.save();
  fluffy.speak();
  let test = await Kitten.find({ name: /^fluff/ });
  await Kitten.deleteMany({ name: /^fluff/ });
  Kitten.db.dele;

  const schema = new mongoose.Schema({ name: String, size: String });
  const Tank = mongoose.model("Tank", schema);
  // Tank.deleteMany({})
};
