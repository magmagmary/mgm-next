import sql from 'better-sqlite3';
import { Message } from '../types/shared-types';
import { cache } from 'react';

const db = new sql('messages.db');

function initDb(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY, 
      text TEXT
    )`);
}

export function addMessage(message: string): void {
  db.prepare('INSERT INTO messages (text) VALUES (?)').run(message);
}

export const getMessages = cache((): Message[] => {
  console.log('********* getting messages from db *********');
  return db.prepare('SELECT * FROM messages').all() as Message[];
});

initDb();

