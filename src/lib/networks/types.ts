import { z } from 'zod';

export const NetworkType = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet',
  LOCALNET: 'localnet',
} as const;

export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

const networkTypeSchema = z.nativeEnum(NetworkType);

export const isNetworkType = (value: unknown): value is NetworkType =>
  networkTypeSchema.safeParse(value).success;
