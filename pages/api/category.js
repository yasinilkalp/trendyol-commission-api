import { Redis } from '@upstash/redis';
require("dotenv").config();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_URL,
  token: process.env.UPSTASH_REDIS_TOKEN,
})

export default async function handler(req, res) {
  let categories = await redis.get("categories")
  res.status(200).json(categories)
}