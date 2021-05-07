declare namespace Express {
  export interface Request {
    redis: import("redis").RedisClient;
    user: import("../../database/entities/Users").User;
  }
}
