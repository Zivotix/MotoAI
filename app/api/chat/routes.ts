import { auth } from '@clerk/nextjs';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, Message, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

const configuration = new Configuration({
    apiKey
});

// convert messages from the Vercel AI SDK Format to the format
// that is expected by the Google GenAI SDK
const buildGoogleGenAIPrompt = (messages: Message[]) => ({
  contents: messages
    .filter(message => message.role === 'user' || message.role === 'assistant')
    .map(message => ({
      role: message.role === 'user' ? 'user' : 'model',
      parts: [{ text: message.content }],
    })),
});
 
export async function POST(
    req: Request
    ) {
  // Extract the `prompt` from the body of the request
  try{
    const {userId} = auth();
  const { messages } = await req.json();
 
  const geminiStream = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream(buildGoogleGenAIPrompt(messages));

    if(!userId){
        return new NextResponse("Unauthorized", {status:401});
    }

    if(!configuration)
 
  // Convert the response into a friendly text-stream
  const stream = GoogleGenerativeAIStream(geminiStream);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);

  }catch(error){
    console.log("CONVERSATION_ERROR", error);
    return new NextResponse("Internal error", {status:500})
  }
  
}