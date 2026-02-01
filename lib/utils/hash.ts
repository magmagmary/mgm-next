import crypto from "node:crypto";

export const hashUserPassword =  (password: string) => {
    const salt = crypto.randomBytes(16).toString('hex');
  
    const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  
    return `${hashedPassword}:${salt}`;
  }
  
  export const verifyUserPassword = (storesPassword: string, suppliedPassword: string) => {
    const [hashedPassword, salt] = storesPassword.split(':');
    const hashedPasswordBuffer = Buffer.from(hashedPassword, 'hex');
    const suppliedPasswordBuffer = crypto.scryptSync(suppliedPassword, salt, 64);
    
    return crypto.timingSafeEqual(hashedPasswordBuffer, suppliedPasswordBuffer);
  }