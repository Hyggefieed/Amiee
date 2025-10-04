# 🌱 Therapeutic Healing App  
*"A Friend in Need is a Friend Indeed"*  

**Team Name & ID:** Amiee (T146)  
**Team Members & Roles:**  
- Deo Pratim (Team Lead)  
- Muskan (Presentation)  
- Manya (Presentation)  
- Taniya Singh (Tech)  

**Problem Statement Selected:** Health and Well-being  

---

## ✨ Project Overview

**Therapeutic Healing App** is an innovative mental wellness platform designed to provide compassionate, real-time support to individuals struggling with trauma, anxiety, and depression. Leveraging the power of AI, the app functions as a personal, non-judgmental companion, offering tailored guidance and interventions based on the user’s emotional state.  

Key elements include:  
- **Humanized AI Conversations** – Empathetic, context-aware dialogues that adapt to user behavior and trauma history, making interactions feel genuinely supportive.  
- **Wellness Check-ins** – Regular reminders for therapy, meditation, yoga, exercise, and medication adherence, promoting holistic mental wellness.  
- **Silent Healing Mode** – Gesture- and tap-based interactions for users who struggle to verbalize their feelings, ensuring accessibility for all.  
- **Safety-first System** – Real-time location tracking with alerts for safe and unsafe areas, enhancing personal security and peace of mind.  
- **Emergency SOS Alerts** – Instant notifications to trusted contacts in moments of crisis.  

The app integrates cutting-edge **AI/NLP models (OpenAI, HuggingFace)** to analyze user sentiment and provide contextually relevant, empathetic responses. With **real-time WebSocket communication**, users can experience immediate support and continuous engagement, while backend services in **Node.js/Express and Python** handle robust, scalable API endpoints.  

At its core, the platform embodies the principle:  
*"A Friend in Need is a Friend Indeed"* – ensuring that every user feels heard, understood, and supported throughout their mental wellness journey.

---

## 🛠️ Tech Stack  

### Frontend
- **React Native (Expo Router)** – Cross-platform mobile experience  
- **Tailwind / NativeBase** – Elegant UI components & responsive styling  

### Backend
- **Node.js + Express** – REST APIs, authentication, WebSockets  
- **Python (FastAPI/Flask)** – AI/NLP services integration for humanized interactions  

### Database
- **MongoDB** – User profiles, trauma logs, and unstructured data  
- **PostgreSQL** – Structured metadata, analytics, and reporting  

### AI & Safety
- **OpenAI / HuggingFace Models** – Sentiment analysis, context-aware, and empathetic responses  
- **Google Maps API** – Real-time location tracking & safe-zone alerts  

### Security
- **JWT Authentication** – Secure user sessions  
- **HIPAA/GDPR Ready** – End-to-end data encryption and compliance-focused architecture  

---

## ✨ Key Features
- **Humanized AI Conversations** – Adaptive responses tailored to individual trauma levels  
- **Wellness Check-ins** – Gentle reminders for therapy, yoga, exercise, meditation, and medications  
- **Silent Healing Mode** – Tap & gesture-based interactions for users unable to express themselves verbally  
- **Safety-first System** – Real-time location alerts for safe and unsafe areas  
- **Emergency SOS** – Instant alerts to trusted contacts in crisis situations  

---

## 🚀 How to Run the Project  

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
