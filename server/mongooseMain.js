const mongoose = require("mongoose");

async function main() {
  // 기본적 구조
  // 몽고db 연결
  try {
    mongoose.connect("mongodb://localhost:27017/");  
  } catch (error) {
    console.log(error)
  }
  
  // 스키마 설정
  const kittySchema = new mongoose.Schema({
    name: String,
  });

  // 메서드 설정 (주입)
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };

  // 모델 생성
  const Kitten = mongoose.model("Kitten", kittySchema);
  const Cat = mongoose.model("Cat", { name: String });

  // 객체 생성
  const fluffy = new Kitten({ name: "fluffy" });
  fluffy.speak(); // "Meow name is fluffy"

  // 저장
  fluffy.save();

  await Kitten.deleteMany({ name: "fluffy" });
}

module.exports = main