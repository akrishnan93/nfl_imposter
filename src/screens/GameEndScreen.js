import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function GameEndScreen({ navigation }) {
  const handlePlayAgain = () => {
    // Reset to home screen
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>GAME ON!</Text>
        <Text style={styles.subtitle}>Everyone has seen their role</Text>

        <View style={styles.instructionBox}>
          <Text style={styles.instructionTitle}>HOW TO PLAY</Text>
          <Text style={styles.instruction}>
            1. Take turns describing the NFL player{'\n'}
            2. Be vague enough to not give it away{'\n'}
            3. Specific enough to prove you know{'\n'}
            4. Vote on who the imposter is!
          </Text>
        </View>

        <Text style={styles.tip}>
          The imposter wins by guessing the player{'\n'}
          or by not getting caught!
        </Text>

        <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
          <Text style={styles.playAgainButtonText}>PLAY AGAIN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a1929',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4ade80',
    letterSpacing: 4,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: '#8892a0',
    marginBottom: 60,
  },
  instructionBox: {
    backgroundColor: '#1e3a5f',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    marginBottom: 32,
  },
  instructionTitle: {
    fontSize: 14,
    color: '#8892a0',
    letterSpacing: 2,
    marginBottom: 16,
    textAlign: 'center',
  },
  instruction: {
    fontSize: 16,
    color: '#ffffff',
    lineHeight: 28,
  },
  tip: {
    fontSize: 14,
    color: '#5a6a7a',
    textAlign: 'center',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  playAgainButton: {
    marginTop: 'auto',
    marginBottom: 40,
    backgroundColor: '#c41e3a',
    paddingHorizontal: 48,
    paddingVertical: 18,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  playAgainButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
