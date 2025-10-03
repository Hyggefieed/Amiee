import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  StatusBar,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path, G, Circle, Defs, RadialGradient, Stop, Line } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

// Lotus Icon Component
const LotusIcon = ({ size = 40 }: { size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 60 60">
      <Defs>
        <RadialGradient id="lotusGrad" cx="50%" cy="50%">
          <Stop offset="0%" stopColor="#F8E5DC" stopOpacity="1" />
          <Stop offset="100%" stopColor="#E8C5B8" stopOpacity="1" />
        </RadialGradient>
      </Defs>
      <G transform="translate(30, 30)">
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <G key={`petal-${i}`} transform={`rotate(${rotation})`}>
            <Path
              d="M0,-8 Q-3,-15 -4,-18 Q-3,-20 0,-19 Q3,-20 4,-18 Q3,-15 0,-8 Z"
              fill="url(#lotusGrad)"
              opacity="0.9"
            />
          </G>
        ))}
        <Path
          d="M0,-6 C-3,-6 -5,-4 -5,-2 C-5,0 -3,2 0,5 C3,2 5,0 5,-2 C5,-4 3,-6 0,-6 Z"
          fill="#F5E5D8"
        />
      </G>
    </Svg>
  );
};

// Settings Icon Component
const SettingsIcon = ({ size = 32 }: { size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="1.5">
      <Circle cx="12" cy="12" r="3" />
      <Path d="M12 1v6m0 6v6M1 12h6m6 0h6" />
      <Path d="M4.2 4.2l4.3 4.3m5.5 0l4.3-4.3M4.2 19.8l4.3-4.3m5.5 0l4.3 4.3" />
    </Svg>
  );
};

// Chat Icon Component
const ChatIcon = ({ size = 32 }: { size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3A3A3A" strokeWidth="1.5">
      <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <Path d="M8 10h8M8 14h4" strokeLinecap="round" />
    </Svg>
  );
};

// Alert Icon Component
const AlertIcon = ({ size = 32 }: { size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3A3A3A" strokeWidth="1.5">
      <Path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <Line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" />
      <Circle cx="12" cy="17" r="0.5" fill="#3A3A3A" />
    </Svg>
  );
};

// Journey Icon Component
const JourneyIcon = ({ size = 32 }: { size?: number }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3A3A3A" strokeWidth="1.5">
      <Circle cx="12" cy="12" r="10" />
      <Path d="M12 6v6l4 2" strokeLinecap="round" />
    </Svg>
  );
};

// Emoji Component
const Emoji = ({ type, isSelected, onPress }: { type: string; isSelected: boolean; onPress: () => void }) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const getEmojiPath = () => {
    switch (type) {
      case 'sad':
        return {
          face: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
          mouth: "M8 15c1-1 2-2 4-2s3 1 4 2",
          leftEye: { cx: 9, cy: 10 },
          rightEye: { cx: 15, cy: 10 },
        };
      case 'neutral':
        return {
          face: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
          mouth: "M8 15h8",
          leftEye: { cx: 9, cy: 10 },
          rightEye: { cx: 15, cy: 10 },
        };
      case 'ok':
        return {
          face: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
          mouth: "M8 15c1 0.5 2 1 4 1s3-0.5 4-1",
          leftEye: { cx: 9, cy: 10 },
          rightEye: { cx: 15, cy: 10 },
        };
      case 'good':
        return {
          face: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
          mouth: "M8 14c1 2 2 3 4 3s3-1 4-3",
          leftEye: { cx: 9, cy: 10 },
          rightEye: { cx: 15, cy: 10 },
        };
      case 'happy':
        return {
          face: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
          mouth: "M7 13c1 3 3 4 5 4s4-1 5-4",
          leftEye: { cx: 9, cy: 9.5 },
          rightEye: { cx: 15, cy: 9.5 },
          happyEyes: true,
        };
      default:
        return null;
    }
  };

  const emoji = getEmojiPath();
  if (!emoji) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <Svg width={48} height={48} viewBox="0 0 24 24">
          <Path
            d={emoji.face}
            fill="none"
            stroke={isSelected ? "#6B5D52" : "#3A3A3A"}
            strokeWidth={isSelected ? "2" : "1.5"}
          />
          {emoji.happyEyes ? (
            <>
              <Path d="M7 9.5c0.5-0.5 1-0.5 2-0.5" stroke={isSelected ? "#6B5D52" : "#3A3A3A"} strokeWidth={isSelected ? "2" : "1.5"} strokeLinecap="round" />
              <Path d="M15 9c0.5-0.5 1-0.5 2-0.5" stroke={isSelected ? "#6B5D52" : "#3A3A3A"} strokeWidth={isSelected ? "2" : "1.5"} strokeLinecap="round" />
            </>
          ) : (
            <>
              <Circle cx={emoji.leftEye.cx} cy={emoji.leftEye.cy} r="1" fill={isSelected ? "#6B5D52" : "#3A3A3A"} />
              <Circle cx={emoji.rightEye.cx} cy={emoji.rightEye.cy} r="1" fill={isSelected ? "#6B5D52" : "#3A3A3A"} />
            </>
          )}
          <Path
            d={emoji.mouth}
            fill="none"
            stroke={isSelected ? "#6B5D52" : "#3A3A3A"}
            strokeWidth={isSelected ? "2" : "1.5"}
            strokeLinecap="round"
          />
        </Svg>
      </Animated.View>
    </TouchableOpacity>
  );
};

// Floating Star Component
const FloatingStar = ({ delay, size = 3 }: { delay: number; size?: number }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 1500,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: -30,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [delay]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY }],
      }}
    >
      <View style={[styles.star, { width: size, height: size, borderRadius: size / 2 }]} />
    </Animated.View>
  );
};

// Menu Button Component
const MenuButton = ({ 
  icon, 
  text, 
  onPress, 
  delay 
}: { 
  icon: React.ReactNode; 
  text: string; 
  onPress: () => void;
  delay: number;
}) => {
  const slideUp = useRef(new Animated.Value(30)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideUp, {
        toValue: 0,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay]);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.menuButtonContainer,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideUp }, { scale }],
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        style={styles.menuButton}
      >
        <View style={styles.menuButtonIcon}>{icon}</View>
        <Text style={styles.menuButtonText}>{text}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideDown = useRef(new Animated.Value(-50)).current;
  const cardSlide = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideDown, {
        toValue: 0,
        tension: 8,
        friction: 8,
        delay: 200,
        useNativeDriver: true,
      }),
      Animated.spring(cardSlide, {
        toValue: 0,
        tension: 8,
        friction: 8,
        delay: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    console.log('Selected mood:', mood);
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent"
        translucent
      />
      
      <LinearGradient
        colors={['#C5BBB1', '#D4CCC2', '#C9BFB5', '#D4CCC2']}
        locations={[0, 0.3, 0.7, 1]}
        style={styles.gradient}
      >
        {/* Floating stars */}
        <View style={[styles.starContainer, { top: height * 0.02, right: width * 0.10 }]}>
          <FloatingStar delay={0} size={3} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.25, left: width * 0.35 }]}>
          <FloatingStar delay={1000} size={2.5} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.55, right: width * 0.80 }]}>
          <FloatingStar delay={2000} size={2.5} />
        </View>
        <View style={[styles.starContainer, { bottom: height * 0.15, left: width * 0.15 }]}>
          <FloatingStar delay={1500} size={3} />
        </View>
        <View style={[styles.starContainer, { bottom: height * 0.25, right: width * 0.20 }]}>
          <FloatingStar delay={2500} size={2.5} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.95, left: width * 0.85 }]}>
          <FloatingStar delay={500} size={2} />
        </View>

        {/* Header */}
        <Animated.View 
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideDown }],
            },
          ]}
        >
          <TouchableOpacity style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <LotusIcon size={45} />
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsButton}>
            <SettingsIcon size={28} />
          </TouchableOpacity>
        </Animated.View>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Greeting */}
          <Animated.View
            style={[
              styles.greetingContainer,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideDown }],
              },
            ]}
          >
            <Text style={styles.greeting}>Hey There..!</Text>
          </Animated.View>

          {/* Check-in Card */}
          <Animated.View
            style={[
              styles.checkInCard,
              {
                opacity: fadeAnim,
                transform: [{ translateY: cardSlide }],
              },
            ]}
          >
            <Text style={styles.checkInTitle}>Daily Check-in</Text>
            <Text style={styles.checkInQuestion}>How are you Feeling Today ?</Text>
            
            <View style={styles.emojiContainer}>
              <Emoji type="sad" isSelected={selectedMood === 'sad'} onPress={() => handleMoodSelect('sad')} />
              <Emoji type="neutral" isSelected={selectedMood === 'neutral'} onPress={() => handleMoodSelect('neutral')} />
              <Emoji type="ok" isSelected={selectedMood === 'ok'} onPress={() => handleMoodSelect('ok')} />
              <Emoji type="good" isSelected={selectedMood === 'good'} onPress={() => handleMoodSelect('good')} />
              <Emoji type="happy" isSelected={selectedMood === 'happy'} onPress={() => handleMoodSelect('happy')} />
            </View>
          </Animated.View>

          {/* Menu Buttons */}
          <View style={styles.menuContainer}>
            <MenuButton 
              icon={<ChatIcon size={32} />}
              text="Talk to Amiee"
              onPress={() => console.log('Talk to Amiee')}
              delay={600}
            />
            <MenuButton 
              icon={<AlertIcon size={32} />}
              text="Rescue Tap"
              onPress={() => console.log('Rescue Tap')}
              delay={750}
            />
            <MenuButton 
              icon={<JourneyIcon size={32} />}
              text="Track Journey"
              onPress={() => console.log('Track Journey')}
              delay={900}
            />
          </View>
        </View>

        {/* Bottom Gradient */}
        <LinearGradient
          colors={['transparent', 'rgba(232, 197, 197, 0.3)', 'rgba(232, 197, 197, 0.5)']}
          style={styles.bottomGradient}
          pointerEvents="none"
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9BFB5',
  },
  gradient: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight! + 15 : 50,
    paddingBottom: 10,
  },
  logoContainer: {
    padding: 5,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#EDE8E0',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#8B7355',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  settingsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  greetingContainer: {
    marginTop: 30,
    marginBottom: 35,
    alignItems: 'center',
  },
  greeting: {
    fontSize: 48,
    color: '#6B5D52',
    fontWeight: '300',
    letterSpacing: 2,
  },
  checkInCard: {
    backgroundColor: 'rgba(237, 232, 224, 0.95)',
    borderRadius: 24,
    padding: 28,
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#8B7355',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  checkInTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#2A2A2A',
    marginBottom: 12,
    textAlign: 'center',
  },
  checkInQuestion: {
    fontSize: 17,
    color: '#4A4A4A',
    marginBottom: 28,
    textAlign: 'center',
    fontWeight: '400',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    gap: 16,
  },
  menuButtonContainer: {
    width: '100%',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(237, 232, 224, 0.95)',
    borderRadius: 20,
    padding: 20,
    paddingLeft: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#8B7355',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  menuButtonIcon: {
    marginRight: 20,
  },
  menuButtonText: {
    fontSize: 20,
    color: '#2A2A2A',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  starContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  star: {
    backgroundColor: '#FFFFFF',
    opacity: 0.7,
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
});