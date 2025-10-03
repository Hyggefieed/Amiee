import express from "express";
import { db } from "../firebaseconfig.js";

const app = express();
app.use(express.json());

app.post("/sendMessage", async (req, res) => {
  try {
    const { conversationId, sender, text } = req.body;

    await db.collection("conversations")
      .doc(conversationId)
      .collection("messages")
      .add({
        sender,
        text,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

    res.status(200).send({ success: true });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
