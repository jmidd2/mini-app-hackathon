export declare enum Errors {
    ENTITY_NOT_FOUND = "entity not found",
    INVALID_PAYLOAD = "invalid payload"
}
export declare function sanitizeErrorMessage(error: any): any;
export declare function mapErrorDetails(details: string): string;
export declare function isError(error: unknown): error is Error;
//# sourceMappingURL=util.d.ts.map