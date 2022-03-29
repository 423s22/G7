import { Context } from 'koa';
import { AccessMode, NextFunction } from '../types';
import { Routes } from './types';
export declare function loginAgainIfDifferentShop(routes: Routes, accessMode?: AccessMode): (ctx: Context, next: NextFunction) => Promise<void>;
//# sourceMappingURL=login-again-if-different-shop.d.ts.map