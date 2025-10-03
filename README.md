# 🌱 Therapeutic Healing App  

A mental wellness platform designed to help individuals heal from trauma, anxiety, and depression through AI-powered conversations, wellness check-ins, silent healing modes, and safety-first features.  

---

## ✨ Features  
- **Humanized AI Conversations** – Context-aware responses based on user behavior and trauma severity.  
- **Wellness Check-ins** – Reminders for therapy, yoga, exercise, meditation, and medications.  
- **Silent Healing Mode** – Tap & gesture-based interactions for those unable to express in words.  
- **Safety-first System** – Live location awareness with safe/unsafe area alerts.  
- **Emergency SOS** – Instant alerts for emergency contacts.  

---

## 🛠️ Tech Stack  

### Frontend  
- **React Native (Expo Router)** – Cross-platform mobile application.  
- **Tailwind / NativeBase** – UI components & styling.  

### Backend  
- **Node.js + Express** – REST APIs, authentication, WebSockets.  
- **Python (FastAPI/Flask)** – AI/NLP services integration.  

### Database  
- **MongoDB** – User data & trauma logs.  
- **PostgreSQL** – Structured metadata & analytics.  

### AI & Safety  
- **OpenAI / HuggingFace Models** – NLP, sentiment analysis, humanized responses.  
- **Google Maps API** – Live location tracking & safe-zone detection.  

### Security  
- **JWT Authentication** – Secure user sessions.  
- **HIPAA/GDPR Ready** – Data encryption & compliance focus.  

---

## 🚀 Getting Started  

### Prerequisites  
- Node.js v18+  
- Expo CLI  
- MongoDB + PostgreSQL running locally or via cloud  
- API keys: OpenAI, HuggingFace, Google Maps  

### Installation  

```bash
# Clone repository
git clone https://github.com/your-username/therapeutic-healing-app.git
cd therapeutic-healing-app

# Install dependencies
npm install

# Start Expo development server
npx expo start
