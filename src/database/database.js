
import * as SQLite from 'expo-sqlite';

let db;

// Initialize the local database
export async function initializeDatabase() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('signlearn.db');
  }

  return db;
}
