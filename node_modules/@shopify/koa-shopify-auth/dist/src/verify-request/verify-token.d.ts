import { Context } from 'koa';
import { AccessMode, NextFunction } from '../types';
import { Routes } from './types';
export declare const REAUTH_HEADER = "X-Shopify-API-Request-Failure-Reauthorize";
export declare const REAUTH_URL_HEADER = "X-Shopify-API-Request-Failure-Reauthorize-Url";
export declare function verifyToken(routes: Routes, accessMode?: AccessMode, returnHeader?: boolean): (ctx: Context, next: NextFunction) => Promise<void>;
//# sourceMappingURL=verify-token.d.ts.map