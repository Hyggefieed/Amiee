import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "";

type Message = {
  sender: string;
  text: string;
  createdAt: any;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const conversationId = "demo123"; // dynamically assign for each user

  useEffect(() => {
    const q = query(
      collection(db, "conversations", conversationId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => doc.data() as Message);
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);
