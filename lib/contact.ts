import fs from 'fs/promises';
import path from 'path';
import { ContactFormData } from './types';

const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'contacts.json');

export async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

export async function saveContactData(data: ContactFormData) {
  await ensureDataDirectory();
  
  let contacts: ContactFormData[] = [];
  try {
    const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    contacts = JSON.parse(fileContent);
  } catch {
    contacts = [];
  }
  
  contacts.push(data);
  await fs.writeFile(DATA_FILE_PATH, JSON.stringify(contacts, null, 2));
}

export async function readContactData(): Promise<ContactFormData[]> {
  await ensureDataDirectory();
  
  try {
    const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    return JSON.parse(fileContent);
  } catch {
    return [];
  }
}