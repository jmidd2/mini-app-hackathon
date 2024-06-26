"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Errors = void 0;
exports.isError = isError;
exports.mapErrorDetails = mapErrorDetails;
exports.sanitizeErrorMessage = sanitizeErrorMessage;
var _client = require("@prisma/client");
var Errors = /*#__PURE__*/function (Errors) {
  Errors["ENTITY_NOT_FOUND"] = "entity not found";
  Errors["INVALID_PAYLOAD"] = "invalid payload";
  return Errors;
}({});
exports.Errors = Errors;
var PrismaErrors = [_client.Prisma.PrismaClientKnownRequestError, _client.Prisma.PrismaClientUnknownRequestError, _client.Prisma.PrismaClientRustPanicError, _client.Prisma.PrismaClientInitializationError, _client.Prisma.PrismaClientValidationError];

// const errorValues: string[] = Object.values(Errors);

/* eslint @typescript-eslint/no-explicit-any:off */
function sanitizeErrorMessage(error) {
  if (typeof error.message === 'string' && PrismaErrors.includes(error)) {
    return error.message;
  } else {
    return 'an unknown error has occurred';
  }
}
function mapErrorDetails(details) {
  return details;
}
function isError(error) {
  return error instanceof Error;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50IiwicmVxdWlyZSIsIkVycm9ycyIsImV4cG9ydHMiLCJQcmlzbWFFcnJvcnMiLCJQcmlzbWEiLCJQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciIsIlByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IiLCJQcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvciIsIlByaXNtYUNsaWVudEluaXRpYWxpemF0aW9uRXJyb3IiLCJQcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IiLCJzYW5pdGl6ZUVycm9yTWVzc2FnZSIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwibWFwRXJyb3JEZXRhaWxzIiwiZGV0YWlscyIsImlzRXJyb3IiLCJFcnJvciJdLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYSB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZXhwb3J0IGVudW0gRXJyb3JzIHtcbiAgRU5USVRZX05PVF9GT1VORCA9ICdlbnRpdHkgbm90IGZvdW5kJyxcbiAgSU5WQUxJRF9QQVlMT0FEID0gJ2ludmFsaWQgcGF5bG9hZCcsXG59XG5cbmNvbnN0IFByaXNtYUVycm9ycyA9IFtcbiAgUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yLFxuICBQcmlzbWEuUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvcixcbiAgUHJpc21hLlByaXNtYUNsaWVudFJ1c3RQYW5pY0Vycm9yLFxuICBQcmlzbWEuUHJpc21hQ2xpZW50SW5pdGlhbGl6YXRpb25FcnJvcixcbiAgUHJpc21hLlByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvcixcbl07XG5cbi8vIGNvbnN0IGVycm9yVmFsdWVzOiBzdHJpbmdbXSA9IE9iamVjdC52YWx1ZXMoRXJyb3JzKTtcblxuLyogZXNsaW50IEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnk6b2ZmICovXG5leHBvcnQgZnVuY3Rpb24gc2FuaXRpemVFcnJvck1lc3NhZ2UoZXJyb3I6IGFueSkge1xuICBpZiAodHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIFByaXNtYUVycm9ycy5pbmNsdWRlcyhlcnJvcikpIHtcbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkJztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwRXJyb3JEZXRhaWxzKGRldGFpbHM6IHN0cmluZykge1xuICByZXR1cm4gZGV0YWlscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3IoZXJyb3I6IHVua25vd24pOiBlcnJvciBpcyBFcnJvciB7XG4gIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEVycm9yO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLE9BQUE7QUFBd0MsSUFFNUJDLE1BQU0sMEJBQU5BLE1BQU07RUFBTkEsTUFBTTtFQUFOQSxNQUFNO0VBQUEsT0FBTkEsTUFBTTtBQUFBO0FBQUFDLE9BQUEsQ0FBQUQsTUFBQSxHQUFBQSxNQUFBO0FBS2xCLElBQU1FLFlBQVksR0FBRyxDQUNuQkMsY0FBTSxDQUFDQyw2QkFBNkIsRUFDcENELGNBQU0sQ0FBQ0UsK0JBQStCLEVBQ3RDRixjQUFNLENBQUNHLDBCQUEwQixFQUNqQ0gsY0FBTSxDQUFDSSwrQkFBK0IsRUFDdENKLGNBQU0sQ0FBQ0ssMkJBQTJCLENBQ25DOztBQUVEOztBQUVBO0FBQ08sU0FBU0Msb0JBQW9CQSxDQUFDQyxLQUFVLEVBQUU7RUFDL0MsSUFBSSxPQUFPQSxLQUFLLENBQUNDLE9BQU8sS0FBSyxRQUFRLElBQUlULFlBQVksQ0FBQ1UsUUFBUSxDQUFDRixLQUFLLENBQUMsRUFBRTtJQUNyRSxPQUFPQSxLQUFLLENBQUNDLE9BQU87RUFDdEIsQ0FBQyxNQUFNO0lBQ0wsT0FBTywrQkFBK0I7RUFDeEM7QUFDRjtBQUVPLFNBQVNFLGVBQWVBLENBQUNDLE9BQWUsRUFBRTtFQUMvQyxPQUFPQSxPQUFPO0FBQ2hCO0FBRU8sU0FBU0MsT0FBT0EsQ0FBQ0wsS0FBYyxFQUFrQjtFQUN0RCxPQUFPQSxLQUFLLFlBQVlNLEtBQUs7QUFDL0IifQ==
//# sourceMappingURL=util.js.map