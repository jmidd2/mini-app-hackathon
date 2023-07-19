import {PrismaClient} from '.prisma/client';

export declare const prisma: PrismaClient<{
    log: ("error" | "query" | "info" | "warn")[];
    errorFormat: "pretty";
}, never, import("@prisma/client/runtime/library").DefaultArgs>;
