import { db } from "./firebaseconfig";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const listenForMessages = () => {
  db.collectionGroup("messages").onSnapshot(async (snapshot) => {
    snapshot.docChanges().forEach(async (change) => {
      if (change.type === "added") {
        const msg = change.doc.data();
        if (msg.sender === "user") {
          const aiResponse = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: "You are a compassionate healing assistant." },
              { role: "user", content: msg.text },
            ],
          });

          const responseText = aiResponse.choices[0].message.content;
          await change.doc.ref.parent.add({
            sender: "amiee",
            text: responseText,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        }
      }
    });
  });
};

listenForMessages();
