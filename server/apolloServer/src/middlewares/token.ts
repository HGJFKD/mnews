
import jwt, { JwtPayload } from 'jsonwebtoken';
import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";
import { UserPermissionsEnum } from '../types/users.js';


export const createToken = (email: string, permissions: UserPermissionsEnum) => {
  if (process.env.JWT_SECRET) {
    const user = { email: email, permissions: permissions };
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '2d' });
  } else {
    throw new RequestError("ACCESS_TOKEN_SECRET is not defined", STATUS_CODES.INTERNAL_SERVER_ERROR);
  }
};

export const autoToken = async (token: string) => {
  if (!token) {
    throw new RequestError('Not authorized, no token', STATUS_CODES.UNAUTHORIZED);
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);    
    const permissions = (decoded as JwtPayload).permissions;
  return permissions
  } catch (err) {
    console.error(err);
    throw new RequestError('Not authorized, token failed', STATUS_CODES.UNAUTHORIZED);
  }
}