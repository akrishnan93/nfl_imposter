import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { getRandomPlayer, getCategoryLabel } from '../data/players';

const DIFFICULTIES = ['easy', 'medium', 'hard'];

export default function HomeScreen({ navigation }) {
  const [playerCount, setPlayerCount] = useState(4);
  const [difficulty, setDifficulty] = useState('easy');

  const handleStart = async () => {
    // Pick a random NFL player based on difficulty
    const player = await getRandomPlayer(difficulty);

    // Pick a random imposter (0 to playerCount-1)
    const imposterIndex = Math.floor(Math.random() * playerCount);

    navigation.navigate('Reveal', {
      playerCount,
      secretPlayer: player.name,
      secretPlayerPosition: player.position,
      secretPlayerCategory: getCategoryLabel(difficulty, player),
      imposterIndex,
      currentPlayer: 0,
      difficulty,
    });
  };

  const incrementPlayers = () => {
    setPlayerCount((prev) => prev + 1);
  };

  const decrementPlayers = () => {
    if (playerCount > 2) {
      setPlayerCount((prev) => prev - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>NFL IMPOSTER</Text>
        <Text style={styles.subtitle}>Who doesn't know the player?</Text>

        {/* Player Count Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>NUMBER OF PLAYERS</Text>
          <View style={styles.counterContainer}>
            <TouchableOpacity
              style={[styles.counterButton, playerCount <= 2 && styles.counterButtonDisabled]}
              onPress={decrementPlayers}
              disabled={playerCount <= 2}
            >
              <Text style={styles.counterButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterValue}>{playerCount}</Text>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={incrementPlayers}
            >
              <Text style={styles.counterButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Difficulty Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>DIFFICULTY</Text>
          <View style={styles.difficultyContainer}>
            {DIFFICULTIES.map((diff) => (
              <TouchableOpacity
                key={diff}
                style={[
                  styles.difficultyButton,
                  difficulty === diff && styles.difficultyButtonActive,
                ]}
                onPress={() => setDifficulty(diff)}
              >
                <Text
                  style={[
                    styles.difficultyButtonText,
                    difficulty === diff && styles.difficultyButtonTextActive,
                  ]}
                >
                  {diff.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.difficultyHint}>
            {difficulty === 'easy' && 'Current NFL superstars'}
            {difficulty === 'medium' && 'Current + historic legends'}
            {difficulty === 'hard' && 'Lesser-known players'}
          </Text>
        </View>

        {/* Start Button */}
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>START GAME</Text>
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
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 4,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#8892a0',
    marginBottom: 60,
  },
  section: {
    width: '100%',
    marginBottom: 40,
    alignItems: 'center',
  },
  sectionLabel: {
    fontSize: 14,
    color: '#8892a0',
    letterSpacing: 2,
    marginBottom: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1e3a5f',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
  counterButtonDisabled: {
    backgroundColor: '#1a2a3a',
    opacity: 0.5,
  },
  counterButtonText: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  counterValue: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: 'bold',
    minWidth: 80,
    textAlign: 'center',
  },
  difficultyContainer: {
    flexDirection: 'row',
  },
  difficultyButton: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#1e3a5f',
    borderWidth: 2,
    borderColor: '#1e3a5f',
    marginHorizontal: 6,
  },
  difficultyButtonActive: {
    backgroundColor: '#c41e3a',
    borderColor: '#c41e3a',
  },
  difficultyButtonText: {
    fontSize: 14,
    color: '#8892a0',
    fontWeight: '600',
    letterSpacing: 1,
  },
  difficultyButtonTextActive: {
    color: '#ffffff',
  },
  difficultyHint: {
    fontSize: 13,
    color: '#5a6a7a',
    marginTop: 12,
    fontStyle: 'italic',
  },
  startButton: {
    marginTop: 'auto',
    marginBottom: 40,
    backgroundColor: '#c41e3a',
    paddingHorizontal: 48,
    paddingVertical: 18,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
