import sql from 'better-sqlite3';

const db = new sql('messages.db');

interface MessageRow {
  id: number;
  text: string;
}

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

export function getMessages(): MessageRow[] {
  return db.prepare('SELECT * FROM messages').all() as MessageRow[];
}

initDb();

