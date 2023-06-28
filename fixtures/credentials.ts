import { config } from 'dotenv';

// Load .env file
config();

// Function to get credentials
export function getCredentials() {
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error('Username and password must be provided in the .env file');
  }

  return { username, password };
}
