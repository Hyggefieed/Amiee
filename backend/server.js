import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });

const app = express();
const server = http.createServer(app);

// Allow your frontend origin
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error(err));

// Setup Socket.IO
const io = new Server(server, {
  cors: { origin: "*" }
});

// Track connected users
const users = new Map();

io.on("connection", (socket) => {
  console.log("🟢 User connected:", socket.id);

  socket.on("joinConversation", (conversationId) => {
    socket.join(conversationId);
    console.log(`User joined conversation ${conversationId}`);
  });

  // Listen for new messages
  socket.on("sendMessage", async (messageData) => {
    const { conversationId, sender, text } = messageData;
    // Emit to everyone in same room
    io.to(conversationId).emit("receiveMessage", {
      sender,
      text,
      createdAt: new Date(),
    });

    // Generate AI response if sender is user
    if (sender === "user1") {
      try {
        const aiResponse = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a compassionate healing assistant." },
            { role: "user", content: text },
          ],
        });

        const responseText = aiResponse.choices[0].message.content;
        io.to(conversationId).emit("receiveMessage", {
          sender: "amiee",
          text: responseText,
          createdAt: new Date(),
        });
      } catch (error) {
        console.error("AI response error:", error);
      }
    }
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected:", socket.id);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
