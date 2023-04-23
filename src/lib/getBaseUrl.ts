import { cache } from "react";

export const getBaseUrl = cache(() =>
  process.env.VERCEL_URL
    ? `https://beta.suarez-ramirez.com`
    : `http://localhost:${process.env.PORT ?? 3000}`
);
