import {z} from 'zod'

export const TokenType = {
  USDT: 'usdt',
  USDC: 'usdc',
} as const

export type TokenType = (typeof TokenType)[keyof typeof TokenType];

const tokenTypeSchema = z.nativeEnum(TokenType)

export const isTokenType = (value: unknown): value is TokenType =>
  tokenTypeSchema.safeParse(value).success
