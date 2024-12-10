import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcryptjs';

const secretKey = new TextEncoder().encode('your-secret-key');

export async function createToken(username: string): Promise<string> {
  return new SignJWT({ username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(secretKey);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload;
  } catch {
    return null;
  }
}

export async function verifyCredentials(username: string, password: string): Promise<boolean> {
  const hashedPassword = await bcrypt.hash('admin', 10); // In production, this should be stored in a database
  if (username === 'admin') {
    return bcrypt.compare(password, hashedPassword);
  }
  return false;
}