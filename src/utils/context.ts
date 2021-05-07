import { RedisClient } from "redis";
import { SignedUser } from "../database/entities";

interface Session extends Express.Session {
  userId: string | undefined;
}

export interface Context {
  req: {
    session: Session;
    redis: RedisClient;
    user: SignedUser;
  };
  res: Express.Response & {
    clearCookie: (sid: string) => void;
  };

  user: SignedUser;
}
