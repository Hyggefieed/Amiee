import React, { useEffect, useRef } from 'react';
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
import { useRouter } from "expo-router";
import Svg, { Path, G, Circle, Defs, RadialGradient, Stop } from 'react-native-svg';

import { navigate } from 'expo-router/build/global-state/routing';
import { Navigation } from 'lucide-react';

const { width, height } = Dimensions.get('window');

// Enhanced Lotus Flower Component
const LotusFlower = () => {
  return (
    <Svg width={140} height={140} viewBox="0 0 140 140">
      <Defs>
        <RadialGradient id="petalGrad1" cx="50%" cy="50%">
          <Stop offset="0%" stopColor="#F8E5DC" stopOpacity="1" />
          <Stop offset="100%" stopColor="#E8C5B8" stopOpacity="1" />
        </RadialGradient>
        <RadialGradient id="petalGrad2" cx="50%" cy="50%">
          <Stop offset="0%" stopColor="#F5D5C8" stopOpacity="1" />
          <Stop offset="100%" stopColor="#DDB5A8" stopOpacity="1" />
        </RadialGradient>
        <RadialGradient id="centerGrad" cx="50%" cy="50%">
          <Stop offset="0%" stopColor="#FFFBF8" stopOpacity="1" />
          <Stop offset="100%" stopColor="#F5E5D8" stopOpacity="1" />
        </RadialGradient>
      </Defs>
      
      <G transform="translate(70, 70)">
        {/* Outer petals - 8 petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, i) => (
          <G key={`outer-${i}`} transform={`rotate(${rotation})`}>
            <Path
              d="M0,-25 Q-10,-40 -12,-52 Q-10,-58 0,-56 Q10,-58 12,-52 Q10,-40 0,-25 Z"
              fill="url(#petalGrad1)"
              opacity="0.9"
              stroke="#DDB5A8"
              strokeWidth="0.5"
            />
          </G>
        ))}
        
        {/* Middle petals - 8 petals offset */}
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((rotation, i) => (
          <G key={`middle-${i}`} transform={`rotate(${rotation})`}>
            <Path
              d="M0,-18 Q-8,-32 -10,-42 Q-8,-46 0,-45 Q8,-46 10,-42 Q8,-32 0,-18 Z"
              fill="url(#petalGrad2)"
              opacity="0.95"
              stroke="#E8C5B8"
              strokeWidth="0.5"
            />
          </G>
        ))}
        
        {/* Inner petals - 6 petals */}
        {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
          <G key={`inner-${i}`} transform={`rotate(${rotation})`}>
            <Path
              d="M0,-12 Q-6,-22 -7,-28 Q-6,-31 0,-30 Q6,-31 7,-28 Q6,-22 0,-12 Z"
              fill="url(#petalGrad1)"
              opacity="1"
              stroke="#F5D5C8"
              strokeWidth="0.5"
            />
          </G>
        ))}
        
        {/* Center heart shape */}
        <Path
          d="M0,-16 C-9,-16 -14,-11 -14,-6 C-14,0 -9,6 0,14 C9,6 14,0 14,-6 C14,-11 9,-16 0,-16 Z"
          fill="url(#centerGrad)"
          stroke="#E8C5B8"
          strokeWidth="0.8"
        />
        
        {/* Center detail */}
        <Circle cx="0" cy="0" r="3" fill="#F5E5D8" opacity="0.8" />
      </G>
    </Svg>
  );
};

// Enhanced Floating Star Component
const FloatingStar = ({ delay, size = 3 }: { delay: number; size?: number }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;

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
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.2,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 0.5,
            duration: 1500,
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
        transform: [{ translateY }, { scale }],
      }}
    >
      <View style={[styles.star, { width: size, height: size, borderRadius: size / 2 }]} />
    </Animated.View>
  );
};

// Decorative Circle Component
const DecorativeCircle = ({ size, delay }: { size: number; delay: number }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(scaleAnim, {
            toValue: 1.5,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(opacityAnim, {
            toValue: 0.2,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.1,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  }, [delay]);

  return (
    <Animated.View
      style={[
        styles.decorativeCircle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity: opacityAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    />
  );
};

export default function WelcomeScreen() {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUp = useRef(new Animated.Value(50)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
  const lotusRotate = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    // Lotus rotation animation
    Animated.loop(
      Animated.timing(lotusRotate, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
      })
    ).start();

    // Entrance animations
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 8,
        friction: 7,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.spring(slideUp, {
        toValue: 0,
        tension: 8,
        friction: 8,
        delay: 700,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const spin = lotusRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  const router = useRouter();

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.92,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  

  const handleBegin = () => {
    router.push("/explore");// Add your navigation or action here
    console.log('Let\'s Begin pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent"
        translucent
      />
      
      <LinearGradient
        colors={['#C5BBB1', '#D4CCC2', '#C9BFB5', '#D4CCC2', '#C5BBB1']}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        style={styles.gradient}
      >
        {/* Decorative circles */}
        <View style={[styles.decorativeCircleContainer, { top: '10%', left: '5%' }]}>
          <DecorativeCircle size={150} delay={0} />
        </View>
        <View style={[styles.decorativeCircleContainer, { bottom: '15%', right: '5%' }]}>
          <DecorativeCircle size={200} delay={1000} />
        </View>
        <View style={[styles.decorativeCircleContainer, { top: '30%', right: '10%' }]}>
          <DecorativeCircle size={120} delay={2000} />
        </View>

        {/* Floating stars */}
        <View style={[styles.starContainer, { top: height * 0.08, left: width * 0.78 }]}>
          <FloatingStar delay={0} size={3.5} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.06, right: width * 0.12 }]}>
          <FloatingStar delay={800} size={2.5} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.15, left: width * 0.10 }]}>
          <FloatingStar delay={1600} size={3} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.22, right: width * 0.06 }]}>
          <FloatingStar delay={1200} size={2.5} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.12, left: width * 0.88 }]}>
          <FloatingStar delay={2400} size={2} />
        </View>
        <View style={[styles.starContainer, { bottom: height * 0.38, left: width * 0.08 }]}>
          <FloatingStar delay={2000} size={3} />
        </View>
        <View style={[styles.starContainer, { bottom: height * 0.32, right: width * 0.80 }]}>
          <FloatingStar delay={2800} size={2.5} />
        </View>
        <View style={[styles.starContainer, { bottom: height * 0.18, left: width * 0.18 }]}>
          <FloatingStar delay={400} size={3.5} />
        </View>
        <View style={[styles.starContainer, { bottom: height * 0.15, right: width * 0.15 }]}>
          <FloatingStar delay={3200} size={2.5} />
        </View>
        <View style={[styles.starContainer, { top: height * 0.35, left: width * 0.05 }]}>
          <FloatingStar delay={1800} size={2} />
        </View>

        {/* Main content */}
        <View style={styles.content}>
          {/* Lotus container with glow */}
          <Animated.View
            style={[
              styles.lotusContainer,
              {
                transform: [{ scale: scaleAnim }, { rotate: spin }],
              },
            ]}
          >
            <View style={styles.glowOuter} />
            <View style={styles.glowMiddle} />
            <View style={styles.lotusCircle}>
              <LotusFlower />
            </View>
          </Animated.View>

          {/* Text content */}
          <Animated.View 
            style={[
              styles.textContainer, 
              { 
                opacity: fadeAnim,
                transform: [{ translateY: slideUp }]
              }
            ]}
          >
            <Text style={styles.greeting}>Hi, I'm</Text>
            <Text style={styles.name}>AMIEE</Text>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>
                I'm here to listen, support,
              </Text>
              <Text style={styles.description}>
                and be your safe space.
              </Text>
            </View>
          </Animated.View>

          {/* Button with enhanced design */}
          <Animated.View
            style={[
              styles.buttonContainer,
              { 
                opacity: fadeAnim,
                transform: [{ scale: buttonScale }, { translateY: slideUp }]
              },
            ]}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={handleBegin}
              style={styles.buttonWrapper}
            >
              <LinearGradient
                colors={['#E8C5C5', '#E0B8B8', '#E8C5C5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Let's Begin</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </View>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  lotusContainer: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  glowOuter: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#F5E5D8',
    opacity: 0.15,
  },
  glowMiddle: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#F5E5D8',
    opacity: 0.25,
  },
  lotusCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#EDE8E0',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#8B7355',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  greeting: {
    fontSize: 32,
    color: '#4A4238',
    fontWeight: '300',
    marginBottom: 8,
    letterSpacing: 1,
  },
  name: {
    fontSize: 72,
    color: '#6B5D52',
    fontWeight: '200',
    letterSpacing: 12,
    marginBottom: 35,
    ...Platform.select({
      ios: {
        shadowColor: '#4A4238',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        textShadowColor: 'rgba(74, 66, 56, 0.1)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4,
      },
    }),
  },
  descriptionContainer: {
    alignItems: 'center',
  },
  description: {
    fontSize: 19,
    color: '#6B5D52',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: '300',
    letterSpacing: 0.5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 100 : 80,
  },
  buttonWrapper: {
    borderRadius: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#8B7355',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  button: {
    paddingHorizontal: 65,
    paddingVertical: 20,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    fontSize: 24,
    color: '#5A4A42',
    fontWeight: '400',
    letterSpacing: 1,
  },
  starContainer: {
    position: 'absolute',
    zIndex: 1,
  },
  star: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },
  decorativeCircleContainer: {
    position: 'absolute',
  },
  decorativeCircle: {
    backgroundColor: '#FFFFFF',
  },
});