import { getRandomPlayer, getCategoryLabel, players } from '../src/data/players';
import AsyncStorage from '@react-native-async-storage/async-storage';

describe('Player Cache Logic', () => {
  beforeEach(() => {
    // Clear mock storage and reset mocks before each test
    global.clearMockStorage();
    jest.clearAllMocks();
  });

  describe('getRandomPlayer', () => {
    it('should return a valid player object with name and position', async () => {
      const player = await getRandomPlayer('easy');

      expect(player).toHaveProperty('name');
      expect(player).toHaveProperty('position');
      expect(typeof player.name).toBe('string');
      expect(typeof player.position).toBe('string');
    });

    it('should save the selected player to cache', async () => {
      const player = await getRandomPlayer('easy');

      expect(AsyncStorage.setItem).toHaveBeenCalled();

      // Check that the player was saved to the cache
      const cacheCall = AsyncStorage.setItem.mock.calls[0];
      const savedCache = JSON.parse(cacheCall[1]);
      expect(savedCache.easy).toContain(player.name);
    });

    it('should not return a player that is already in the cache', async () => {
      // Get several players and ensure no duplicates
      const selectedPlayers = [];

      // Get 5 different players
      for (let i = 0; i < 5; i++) {
        const player = await getRandomPlayer('easy');
        expect(selectedPlayers).not.toContain(player.name);
        selectedPlayers.push(player.name);
      }

      // All 5 should be unique
      const uniquePlayers = [...new Set(selectedPlayers)];
      expect(uniquePlayers.length).toBe(5);
    });

    it('should reset cache when all players in difficulty are used', async () => {
      const easyPlayerCount = players.easy.length;
      const selectedPlayers = [];

      // Use all players in easy difficulty
      for (let i = 0; i < easyPlayerCount; i++) {
        const player = await getRandomPlayer('easy');
        selectedPlayers.push(player.name);
      }

      // All players should have been selected (all unique)
      const uniquePlayers = [...new Set(selectedPlayers)];
      expect(uniquePlayers.length).toBe(easyPlayerCount);

      // The cache should now be reset (empty for easy)
      const lastSetItemCall = AsyncStorage.setItem.mock.calls[AsyncStorage.setItem.mock.calls.length - 1];
      const finalCache = JSON.parse(lastSetItemCall[1]);
      expect(finalCache.easy).toEqual([]);
    });

    it('should maintain separate caches for each difficulty', async () => {
      // Get a player from easy
      const easyPlayer = await getRandomPlayer('easy');

      // Get a player from medium
      const mediumPlayer = await getRandomPlayer('medium');

      // Get a player from hard
      const hardPlayer = await getRandomPlayer('hard');

      // Check that each difficulty has its own cache entry
      const lastSetItemCall = AsyncStorage.setItem.mock.calls[AsyncStorage.setItem.mock.calls.length - 1];
      const finalCache = JSON.parse(lastSetItemCall[1]);

      // Easy cache should have easy player
      expect(finalCache.easy).toBeDefined();

      // Medium cache should have medium player
      expect(finalCache.medium).toBeDefined();

      // Hard cache should have hard player
      expect(finalCache.hard).toBeDefined();
    });
  });

  describe('getCategoryLabel', () => {
    it('should return "Current Star" for easy difficulty', () => {
      const player = { name: 'Patrick Mahomes', position: 'Quarterback' };
      expect(getCategoryLabel('easy', player)).toBe('Current Star');
    });

    it('should return "Lesser-known" for hard difficulty', () => {
      const player = { name: 'Gardner Minshew', position: 'Quarterback' };
      expect(getCategoryLabel('hard', player)).toBe('Lesser-known');
    });

    it('should return player category for medium difficulty', () => {
      const legendPlayer = { name: 'Tom Brady', position: 'Quarterback', category: 'Legend' };
      const currentPlayer = { name: 'Patrick Mahomes', position: 'Quarterback', category: 'Current Star' };

      expect(getCategoryLabel('medium', legendPlayer)).toBe('Legend');
      expect(getCategoryLabel('medium', currentPlayer)).toBe('Current Star');
    });
  });

  describe('players data', () => {
    it('should have players for all difficulty levels', () => {
      expect(players.easy.length).toBeGreaterThan(0);
      expect(players.medium.length).toBeGreaterThan(0);
      expect(players.hard.length).toBeGreaterThan(0);
    });

    it('should have valid positions for all players', () => {
      const validPositions = ['Quarterback', 'Wide Receiver', 'Running Back', 'Tight End', 'Defender', 'Kicker'];

      const allPlayers = [...players.easy, ...players.medium, ...players.hard];

      allPlayers.forEach(player => {
        expect(validPositions).toContain(player.position);
      });
    });

    it('medium difficulty players should have category property', () => {
      players.medium.forEach(player => {
        expect(player).toHaveProperty('category');
        expect(['Current Star', 'Legend']).toContain(player.category);
      });
    });
  });
});
