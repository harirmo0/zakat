export interface RateLimitOptions {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitBucket {
  count: number;
  windowStart: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfter?: number;
}

export function createRateLimiter({ windowMs, maxRequests }: RateLimitOptions) {
  const buckets = new Map<string, RateLimitBucket>();

  return {
    check(key: string): RateLimitResult {
      const now = Date.now();
      const bucket = buckets.get(key);

      if (!bucket || now - bucket.windowStart >= windowMs) {
        buckets.set(key, { count: 1, windowStart: now });
        return {
          allowed: true,
          remaining: Math.max(maxRequests - 1, 0),
          retryAfter: undefined
        };
      }

      if (bucket.count >= maxRequests) {
        const retryAfter = Math.ceil((bucket.windowStart + windowMs - now) / 1000);
        return {
          allowed: false,
          remaining: 0,
          retryAfter: Math.max(retryAfter, 1)
        };
      }

      bucket.count += 1;

      return {
        allowed: true,
        remaining: Math.max(maxRequests - bucket.count, 0),
        retryAfter: Math.ceil((bucket.windowStart + windowMs - now) / 1000)
      };
    }
  };
}


