import { Application } from "express";
import jwt from "express-jwt";
import { jwtSecret } from "../config";

export function setupJwtAuth(app: Application) {
  const authMiddleware = jwt({
    secret: jwtSecret,
    credentialsRequired: false,
    userProperty: 'user',
    algorithms: ['HS256']
  });

  app.use(authMiddleware);

  return authMiddleware;
}
