import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { headers } from 'next/headers';
import { readContactData } from '@/lib/contact';

export async function GET(request: Request) {
  try {
    const headersList = headers();
    const token = headersList.get('Authorization')?.split(' ')[1];

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const messages = await readContactData();
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}