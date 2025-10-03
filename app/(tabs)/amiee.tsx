import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { Feather } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  time: string;
  sender: 'user' | 'other';
}

export default function ChatInterface() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      text: "I just woke up from a nightmare.. it felt so real like I was right back there again",
      time: "1:48 a.m",
      sender: 'user'
    },
    {
      id: 2,
      text: "\"I'm here, you're safe..🤍 Take a breath with me for a moment.. 🧘",
      time: "",
      sender: 'other'
    },
    {
      id: 3,
      text: "But right now, look around you...👀 notice the room you're in, the familiar things near you👌✨",
      time: "",
      sender: 'other'
    },
    {
      id: 4,
      text: "If it helps, place your hand on your chest.. breathe in slowly through your nose, and breathe out gently through your mouth...🤗✨",
      time: "",
      sender: 'other'
    }
  ]);

  const [isTyping] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4a3f3a" />
      
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>⚙</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>⚠</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chat Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <View style={styles.avatar} />
        <Text style={styles.headerText}>
          Talking to <Text style={styles.headerName}>Amiee</Text>
        </Text>
      </View>

      {/* Messages Container */}
      <ScrollView style={styles.messagesContainer} contentContainerStyle={styles.messagesContent}>
        {messages.map((message) => (
          <View key={message.id}>
            {message.sender === 'user' && message.time && (
              <Text style={styles.timestamp}>{message.time}</Text>
            )}
            <View
              style={[
                styles.messageBubble,
                message.sender === 'user' ? styles.userMessage : styles.otherMessage
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          </View>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <View style={styles.typingContainer}>
            <View style={styles.typingBubble}>
              <View style={styles.typingDots}>
                <View style={[styles.dot, styles.dot1]} />
                <View style={[styles.dot, styles.dot2]} />
                <View style={[styles.dot, styles.dot3]} />
              </View>
            </View>
            <Text style={styles.typingText}>amiee is typing</Text>
          </View>
        )}
      </ScrollView>

      {/* Input Container */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TouchableOpacity style={styles.emojiButton}>
            <Text style={styles.emojiIcon}>☺</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="type your message"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.micButton}>
          <Text style={styles.micIcon}>🎤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4baad',
  },
  topBar: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 24,
    color: '#6b6153',
  },
  header: {
    backgroundColor: '#4a3f3a',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '300',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e8d5c4',
    marginRight: 12,
  },
  headerText: {
    fontSize: 18,
    color: '#b8a89a',
  },
  headerName: {
    color: '#fff',
    fontWeight: '600',
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#b8ada1',
  },
  messagesContent: {
    padding: 20,
    paddingBottom: 100,
  },
  timestamp: {
    alignSelf: 'flex-end',
    color: '#6b5f53',
    fontSize: 12,
    marginBottom: 8,
    marginTop: 10,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 16,
    borderRadius: 20,
    marginVertical: 6,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d4cabb',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8e0d4',
  },
  messageText: {
    fontSize: 15,
    color: '#2a2520',
    lineHeight: 22,
  },
  typingContainer: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  typingBubble: {
    backgroundColor: '#6b6153',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 6,
  },
  typingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c4baad',
    marginHorizontal: 3,
  },
  dot1: {},
  dot2: {},
  dot3: {},
  typingText: {
    fontSize: 13,
    color: '#6b5f53',
    marginLeft: 5,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'transparent',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c4bbb0',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 12,
  },
  emojiButton: {
    marginRight: 10,
  },
  emojiIcon: {
    fontSize: 24,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#2a2520',
  },
  micButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#6b6153',
    justifyContent: 'center',
    alignItems: 'center',
  },
  micIcon: {
    fontSize: 24,
  },
});