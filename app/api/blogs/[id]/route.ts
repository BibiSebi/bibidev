import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';
import { Context } from '@/types/RouteHandler';

type BlogContext = Context<{
  id: string;
}>;

export async function GET(request: NextApiRequest, { params }: BlogContext) {
  //TODO: add functionality to find if blog id is available inside blogs folder
  return NextResponse.json({});
}
