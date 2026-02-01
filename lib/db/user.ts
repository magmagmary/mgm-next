import db from "./db";

export const createUser = async (email: string, password: string) => {
    const result =  db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(email, password);

    return result.lastInsertRowid
};