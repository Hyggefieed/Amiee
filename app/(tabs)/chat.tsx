import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import io from "socket.io-client";

type Message = {
  sender: string;
  text: string;
  createdAt: Date;
};

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [socket, setSocket] = useState<any>(null);
  const conversationId = "demo123"; // dynamically assign for each user
  const sender = "user1"; // dynamically assign

  useEffect(() => {
    const newSocket = io("http://localhost:5000"); // adjust to your backend URL
    setSocket(newSocket);

    newSocket.emit("joinConversation", conversationId);

    newSocket.on("receiveMessage", (message: Message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (text.trim() && socket) {
      const messageData = {
        conversationId,
        sender,
        text,
      };
      socket.emit("sendMessage", messageData);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text style={styles.sender}>{item.sender}:</Text>
            <Text>{item.text}</Text>
            <Text style={styles.time}>{new Date(item.createdAt).toLocaleTimeString()}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message"
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  sender: {
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});
