const { Router } = require("express");
const Message = require("../model");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const resultado = await Message.find();
    res.send(resultado);
  } catch (error) {
    console.error(error);
  }
});

router.post("/message", async (req, res) => {
  try {
    const { name, text } = req.body;
    const newMessage = await Message({
      name: name,
      text: text,
    });
    const resultado = await newMessage.save();
    res.send(resultado);
  } catch (error) {
    console.error("error");
  }
});

module.exports = router;
