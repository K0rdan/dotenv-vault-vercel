// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { TEST1, NEXT_PUBLIC_TEST2 } = process.env;

export default function handler(req, res) {
  console.log('API Endpoint, TEST', process.env);
  console.log('API Endpoint, TEST1-1', TEST1);
  console.log('API Endpoint, TEST1-2', process.env.TEST1);
  console.log('API Endpoint, TEST2-1', NEXT_PUBLIC_TEST2);
  console.log('API Endpoint, TEST2-2', process.env.NEXT_PUBLIC_TEST2);
  res.status(200).json({ name: 'John Doe' });
}
