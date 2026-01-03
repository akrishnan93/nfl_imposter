import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function RevealScreen({ route, navigation }) {
  const { playerCount, secretPlayer, imposterIndex, currentPlayer } = route.params;
  const [isRevealed, setIsRevealed] = useState(false);

  const isImposter = currentPlayer === imposterIndex;
  const isLastPlayer = currentPlayer === playerCount - 1;

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleHideAndPass = () => {
    if (isLastPlayer) {
      navigation.navigate('GameEnd');
    } else {
      // Navigate to the same screen with next player
      navigation.push('Reveal', {
        playerCount,
        secretPlayer,
        imposterIndex,
        currentPlayer: currentPlayer + 1,
      });
    }
  };

  const handleReset = () => {
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        {/* Player indicator */}
        <Text style={styles.playerIndicator}>
          Player {currentPlayer + 1} of {playerCount}
        </Text>

        {!isRevealed ? (
          // Hidden state
          <View style={styles.hiddenContainer}>
            <Text style={styles.instruction}>
              Hand the phone to Player {currentPlayer + 1}
            </Text>
            <Text style={styles.subInstruction}>
              Make sure no one else can see the screen
            </Text>
            <TouchableOpacity style={styles.revealButton} onPress={handleReveal}>
              <Text style={styles.revealButtonText}>SHOW MY WORD</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Revealed state
          <View style={styles.revealedContainer}>
            {isImposter ? (
              // Imposter view
              <>
                <Text style={styles.roleLabel}>YOU ARE THE</Text>
                <Text style={styles.imposterText}>IMPOSTER</Text>
                <Text style={styles.imposterHint}>
                  You don't know the player.{'\n'}
                  Blend in and don't get caught!
                </Text>
              </>
            ) : (
              // Regular player view
              <>
                <Text style={styles.roleLabel}>THE SECRET PLAYER IS</Text>
                <Text style={styles.playerName}>{secretPlayer}</Text>
                <Text style={styles.playerHint}>
                  Remember this name.{'\n'}
                  One person doesn't know it!
                </Text>
              </>
            )}

            <TouchableOpacity
              style={styles.hideButton}
              onPress={handleHideAndPass}
            >
              <Text style={styles.hideButtonText}>
                {isLastPlayer ? 'START DISCUSSION' : 'HIDE & PASS'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
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
    paddingTop: 40,
    alignItems: 'center',
  },
  playerIndicator: {
    fontSize: 16,
    color: '#8892a0',
    letterSpacing: 2,
    marginBottom: 40,
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  instruction: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  subInstruction: {
    fontSize: 14,
    color: '#5a6a7a',
    textAlign: 'center',
    marginBottom: 60,
  },
  revealButton: {
    backgroundColor: '#1e3a5f',
    paddingHorizontal: 48,
    paddingVertical: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#3a5a8f',
  },
  revealButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  revealedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  roleLabel: {
    fontSize: 14,
    color: '#8892a0',
    letterSpacing: 3,
    marginBottom: 16,
  },
  imposterText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#c41e3a',
    letterSpacing: 4,
    marginBottom: 24,
  },
  imposterHint: {
    fontSize: 16,
    color: '#8892a0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 60,
  },
  playerName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4ade80',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  playerHint: {
    fontSize: 16,
    color: '#8892a0',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 60,
  },
  hideButton: {
    backgroundColor: '#c41e3a',
    paddingHorizontal: 48,
    paddingVertical: 18,
    borderRadius: 12,
    position: 'absolute',
    bottom: 60,
  },
  hideButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  resetButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1e3a5f',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#5a6a7a',
    fontWeight: 'bold',
  },
});
