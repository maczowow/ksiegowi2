import { NextResponse } from 'next/server';
import { saveContactData } from '@/lib/contact';
import { ContactFormData } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();
    data.timestamp = new Date().toISOString();
    
    await saveContactData(data);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save contact data' },
      { status: 500 }
    );
  }
}