import {Prisma} from '@prisma/client';

export enum Errors {
  ENTITY_NOT_FOUND = 'entity not found',
  INVALID_PAYLOAD = 'invalid payload',
}

const PrismaErrors = [
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientUnknownRequestError,
  Prisma.PrismaClientRustPanicError,
  Prisma.PrismaClientInitializationError,
  Prisma.PrismaClientValidationError,
];

// const errorValues: string[] = Object.values(Errors);

/* eslint @typescript-eslint/no-explicit-any:off */
export function sanitizeErrorMessage(error: any) {
  if (typeof error.message === 'string' && PrismaErrors.includes(error)) {
    return error.message;
  } else {
    return 'an unknown error has occurred';
  }
}

export function mapErrorDetails(details: string) {
  return details;
}

export function isError(error: unknown): error is Error {
  return error instanceof Error;
}
