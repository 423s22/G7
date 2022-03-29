import { Context } from 'koa';
import { Routes } from './types';
import { AccessMode } from '../types';
export declare function redirectToAuth({ fallbackRoute, authRoute }: Routes, ctx: Context): void;
export declare function clearSession(ctx: Context, accessMode?: AccessMode): Promise<void>;
//# sourceMappingURL=utilities.d.ts.map