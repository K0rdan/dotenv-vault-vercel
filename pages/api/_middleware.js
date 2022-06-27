import { NextResponse } from 'next/server';

const { TEST1, NEXT_PUBLIC_TEST2 } = process.env;

export function middleware() {
  console.log('Middleware, TEST', process.env);
  console.log('Middleware, TEST1-1', TEST1);
  console.log('Middleware, TEST1-2', process.env.TEST1);
  console.log('Middleware, TEST2-1', NEXT_PUBLIC_TEST2);
  console.log('Middleware, TEST2-2', process.env.NEXT_PUBLIC_TEST2);
  return NextResponse.next();
}
