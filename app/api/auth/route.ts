import { NextResponse } from 'next/server';
import { createToken, verifyCredentials } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    
    const isValid = await verifyCredentials(username, password);
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    const token = await createToken(username);
    
    const response = NextResponse.json({ token });
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 24 hours
    });
    
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}