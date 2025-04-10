const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("SucessFull!!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Neha",
    to: "Dhruv",
    msg: "Hii Can we Talk??",
    created_at: new Date(),
  },
  {
    from: "Priya",
    to: "Dxeditzz",
    msg: "Hii Love Your Profile Who's Admin?",
    created_at: new Date(),
  },
  {
    from: "Payal",
    to: "Cosmic Freak",
    msg: "I Like You A Lot",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
