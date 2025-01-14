// app/api/graphql-proxy/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  const response = await fetch('https://api.amboss.space/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Origin': 'https://amboss.space',
      'Referer': 'https://amboss.space',
      'Accept': 'application/json'
    },
    body: JSON.stringify(body)
  });
  
  const data = await response.json();
  return NextResponse.json(data);
}

// Apollo sometimes sends preflight OPTIONS requests
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
  });
}

// Also handle GET requests
export async function GET(request: Request) {
  return NextResponse.json({ message: "GraphQL endpoint ready" });
}
